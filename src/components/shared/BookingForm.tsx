'use client';

import { useState } from 'react';
import { Service } from '@/lib/types';

interface BookingFormProps {
  service: Service;
  onSubmit: (data: { dateTime: Date; remarks: string }) => void;
}

export default function BookingForm({ service, onSubmit }: BookingFormProps) {
  const [dateTime, setDateTime] = useState('');
  const [remarks, setRemarks] = useState('');

  const minDateTime = new Date();
  minDateTime.setHours(minDateTime.getHours() + 2); // Minimum 2 hours from now

  return (
    <form 
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ dateTime: new Date(dateTime), remarks });
      }}
    >
      <div>
        <label className="block text-sm font-medium mb-1">
          Select Date and Time
        </label>
        <input
          type="datetime-local"
          min={minDateTime.toISOString().slice(0, 16)}
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">
          Additional Remarks
        </label>
        <textarea
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Any specific requirements..."
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md"
      >
        Proceed to Payment
      </button>
    </form>
  );
}
