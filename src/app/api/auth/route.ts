
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { User } from '@/lib/models/User';
import { connectDB } from '@/lib/db/mongoose';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { action, email, password } = await request.json();

    if (action === 'register') {
      const hashed = await bcrypt.hash(password, 10);
      await User.create({ email, hashedPassword: hashed });
      return NextResponse.json({ success: true, message: 'User registered' });
    } else if (action === 'login') {
      const user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json({ success: false, message: 'Invalid email' });
      }
      const match = await bcrypt.compare(password, user.hashedPassword);
      if (!match) {
        return NextResponse.json({ success: false, message: 'Wrong password' });
      }
      return NextResponse.json({ success: true, message: 'Logged in' });
    }

    return NextResponse.json({ success: false, message: 'No valid action' });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Server error' });
  }
}