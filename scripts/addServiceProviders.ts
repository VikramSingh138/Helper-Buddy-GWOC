import mongoose from 'mongoose';
import { connectDB } from '@/lib/db/mongoose';
import { ServiceProvider } from '@/lib/models/User';
import { ServiceProviderInfo } from '@/lib/models/ServiceProviderInfo';

async function addServiceProviders() {
  await connectDB();

  const serviceProviders = [
    {
      email: 'provider1@example.com',
      hashedPassword: 'hashedpassword1', // Replace with actual hashed password
      name: 'Provider One',
      phone: '1234567890',
    },
    {
      email: 'provider2@example.com',
      hashedPassword: 'hashedpassword2', // Replace with actual hashed password
      name: 'Provider Two',
      phone: '0987654321',
    },
  ];

  const serviceProviderInfos = [
    {
      providerId: 'provider1@example.com', // Use the email as the providerId for simplicity
      services: ['House Cleaning'],
      pincodes: ['395007'],
    },
    {
      providerId: 'provider2@example.com', // Use the email as the providerId for simplicity
      services: ['Plumbing'],
      pincodes: ['400001', '400002'],
    },
  ];

  try {
    await ServiceProvider.insertMany(serviceProviders);
    await ServiceProviderInfo.insertMany(serviceProviderInfos);
    console.log('Service providers and their info added successfully');
  } catch (error) {
    console.error('Error adding service providers:', error);
  } finally {
    mongoose.connection.close();
  }
}

addServiceProviders();
