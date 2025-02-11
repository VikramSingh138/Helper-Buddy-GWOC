'use client';

import { useState } from 'react';
import { Service } from '@/lib/types';
import Button from './Button';
import Modal from './Modal';
import Input from './Input';
import { useAuth } from '@/lib/auth';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [dateTime, setDateTime] = useState('');
  const [pincode, setPincode] = useState('');
  const { user } = useAuth();

  // Add default image
  const defaultImage = '/images/service-default.jpg'; // Make sure this image exists in your public folder
  const backgroundImage = service.image || defaultImage;

  const handleBook = async () => {
    if (!user) {
      alert('Please login to book a service');
      return;
    }

    try {
      const response = await fetch('/api/service-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceId: service.id,
          userId: user.id,
          dateTime: new Date(dateTime),
          pincode,
        }),
      });

      if (!response.ok) throw new Error('Failed to create service request');

      // Reset form and close modal
      setDateTime('');
      setPincode('');
      setIsBookingOpen(false);
      alert('Service request sent successfully!');
    } catch (error) {
      console.error('Error creating service request:', error);
      alert('Failed to send service request');
    }
  };

  return (
    <div>
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-200 font-bold">₹{service.price}</span>
          <Button variant="tertiary" size="sm" onClick={() => setIsBookingOpen(true)}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}