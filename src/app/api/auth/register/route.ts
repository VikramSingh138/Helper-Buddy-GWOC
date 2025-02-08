import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { User } from '@/lib/models/User';
import { connectDB } from '@/lib/db/mongoose';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password, name, phone, userType } = await request.json();
    
    if (!userType || !['user', 'admin', 'serviceProvider'].includes(userType)) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid user type' 
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ 
      email, 
      hashedPassword, 
      name, 
      phone,
      userType
    });

    return NextResponse.json({ 
      success: true, 
      message: 'User registered successfully' 
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Registration failed' 
    });
  }
}
