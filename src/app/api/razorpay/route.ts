import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET!,
});

export async function POST(request: Request) {
  const { amount } = await request.json();

  const payment = await razorpay.orders.create({
    amount: amount * 100,
    currency: 'INR',
    payment_capture: true,
  });

  return NextResponse.json(payment);
}
