import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, ServiceProvider, Admin } from '@/lib/models/User';
import { connectDB } from '@/lib/db/mongoose';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password, name, phone, userType } = await request.json();
    
    let Model;
    if (userType === 'user') {
      Model = User;
    } else if (userType === 'serviceProvider') {
      Model = ServiceProvider;
    } else if (userType === 'admin') {
      Model = Admin;
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid user type' 
      });
    }

    const existingUser = await Model.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Model.create({ 
      email, 
      hashedPassword, 
      name, 
      phone
    });

    const token = jwt.sign({ id: newUser._id, email: newUser.email, userType: newUser.userType }, JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ 
      success: true, 
      message: 'User registered successfully',
      token,
      user: { 
        id: newUser._id, 
        email: newUser.email, 
        name: newUser.name,
        userType: newUser.userType
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Registration failed' 
    });
  }
}
