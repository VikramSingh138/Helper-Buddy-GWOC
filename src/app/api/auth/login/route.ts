import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { User } from '@/lib/models/User';
import { connectDB } from '@/lib/db/mongoose';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password, userType } = await request.json();
    
    if (!userType || !['user', 'admin', 'serviceProvider'].includes(userType)) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid user type' 
      });
    }

    const user = await User.findOne({ email, userType });
    if (!user) {
      return NextResponse.json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    const isValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isValid) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid password' 
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Login successful',
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
