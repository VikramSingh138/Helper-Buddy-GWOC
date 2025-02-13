import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ServiceProvider } from '@/lib/models/User';
import { ServiceProviderInfo } from '@/lib/models/ServiceProviderInfo';
import { connectDB } from '@/lib/db/mongoose';

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET!;

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { email, password, name, phone, pincodes, services } = await request.json();

    const existingProvider = await ServiceProvider.findOne({ email });
    if (existingProvider) {
      return NextResponse.json({
        success: false,
        message: 'Email already registered'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newProvider = await ServiceProvider.create({
      email,
      hashedPassword,
      name,
      phone
    });

    // Save pincode & services info
    await ServiceProviderInfo.create({
      providerId: newProvider._id,
      services,
      pincodes
    });

    const token = jwt.sign({ id: newProvider._id, email: newProvider.email, userType: 'serviceProvider' }, JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({
      success: true,
      message: 'Service provider registered successfully',
      token,
      provider: {
        id: newProvider._id,
        email: newProvider.email,
        name: newProvider.name
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
