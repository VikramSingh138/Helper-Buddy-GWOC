'use client';

import { useState } from 'react';
import { Service } from '@/lib/types';
import Button from './Button';
import BookingForm from '@/components/shared/BookingForm';
import Modal from './Modal';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBook = (bookingData: { dateTime: Date; remarks: string }) => {
    console.log('Booking data:', bookingData);
    setIsBookingOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-bold">₹{service.price}</span>
          <Button size="sm" onClick={() => setIsBookingOpen(true)}>Book Now</Button>
        </div>
      </div>

      <Modal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} title={`Book ${service.title}`}>
        <BookingForm service={service} onSubmit={handleBook} />
      </Modal>
    </div>
  );
}
