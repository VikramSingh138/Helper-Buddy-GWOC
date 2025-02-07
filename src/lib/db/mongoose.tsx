import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/helperbuddy';

let dbConnected = false;

export async function connectDB() {
  if (dbConnected) {
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI);
    dbConnected = true;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}
