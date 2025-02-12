import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { connectDB } from '@/lib/db/mongoose';
import { ServiceProvider } from '@/lib/models/User';

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET!;

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    const provider = await ServiceProvider.findOne({ email });
    if (!provider) {
      return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
    }

    const match = await bcrypt.compare(password, provider.hashedPassword);
    if (!match) {
      return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: provider._id, email: provider.email, userType: 'serviceProvider' },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token,
      provider: { id: provider._id, email: provider.email, name: provider.name },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ success: false, message: 'Login failed' }, { status: 500 });
  }
}
