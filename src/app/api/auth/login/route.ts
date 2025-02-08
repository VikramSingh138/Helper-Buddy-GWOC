import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, ServiceProvider, Admin } from '@/lib/models/User';
import { connectDB } from '@/lib/db/mongoose';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password, userType } = await request.json();
    
    let Model;
    if (userType === 'user') {
      Model = User;
    } else if (userType === 'serviceProvider') {
      Model = ServiceProvider;
    } else if (userType === 'admin') {
      Model = Admin;
    } else {
      console.log(`Invalid user type: ${userType}`);
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid user type' 
      });
    }

    console.log(`Looking for user with email: ${email} and userType: ${userType}`);
    const user = await Model.findOne({ email });
    if (!user) {
      console.log(`User not found with email: ${email} and userType: ${userType}`);
      console.log(`Current database: ${mongoose.connection.name}`);
      console.log(`Current collections: ${Object.keys(mongoose.connection.collections)}`);
      return NextResponse.json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    const isValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isValid) {
      console.log('Invalid password');
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid password' 
      });
    }

    const token = jwt.sign({ id: user._id, email: user.email, userType: user.userType }, JWT_SECRET, { expiresIn: '1h' });

    console.log(`User ${user.email} logged in successfully`);
    return NextResponse.json({ 
      success: true, 
      message: 'Login successful',
      token,
      user: { 
        id: user._id, 
        email: user.email, 
        name: user.name,
        userType: user.userType
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Login failed' 
    });
  }
}
