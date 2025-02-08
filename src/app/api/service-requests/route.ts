import { NextResponse } from 'next/server';
import { ServiceRequest } from '@/lib/types';

// This is a mock database. In a real app, you'd use a proper database
let serviceRequests: ServiceRequest[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newRequest: ServiceRequest = {
      id: Date.now().toString(),
      ...body,
      status: 'pending',
    };
    serviceRequests.push(newRequest);
    return NextResponse.json(newRequest, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create request' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const providerId = searchParams.get('providerId');
  
  if (!providerId) {
    return NextResponse.json({ error: 'Provider ID is required' }, { status: 400 });
  }

  // In a real app, you'd query your database here
  const requests = serviceRequests.filter(req => req.serviceProviderId === providerId);
  return NextResponse.json(requests);
}
