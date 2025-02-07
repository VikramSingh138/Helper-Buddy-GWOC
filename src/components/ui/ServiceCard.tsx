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
    <div 
      className="relative bg-black text-white rounded-lg shadow-md overflow-hidden transition-transform transform 
                 hover:scale-105 hover:shadow-2xl"
      style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-200 font-bold">₹{service.price}</span>
          <Button variant="primary" size="sm" onClick={() => setIsBookingOpen(true)}>
            Book Now
          </Button>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} title={`Book ${service.title}`}>
        <BookingForm service={service} onSubmit={handleBook} />
      </Modal>
    </div>
  );
}