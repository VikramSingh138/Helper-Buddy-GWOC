'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { ServiceRequest } from '@/lib/types';

export default function ProviderDashboard() {
  const { user, isServiceProvider } = useAuth();
  const [acceptedBookings, setAcceptedBookings] = useState<ServiceRequest[]>([]);

  useEffect(() => {
    if (user && isServiceProvider) {
      fetchAcceptedBookings();
    }
  }, [user, isServiceProvider]);

  const fetchAcceptedBookings = async () => {
    try {
      const response = await fetch(`/api/provider/bookings?status=accepted&providerId=${user?.id}`);
      if (!response.ok) throw new Error('Failed to fetch bookings');
      const data = await response.json();
      setAcceptedBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  if (!isServiceProvider) {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
      <div className="grid gap-4">
        {acceptedBookings.map((booking) => (
          <div key={booking.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Service: {booking.serviceId}</p>
                <p>Schedule: {new Date(booking.dateTime).toLocaleString()}</p>
                <p>Location: {booking.pincode}</p>
                <p>Status: {booking.status}</p>
              </div>
              <div>
                {booking.status === 'accepted' && (
                  <button 
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => {/* Add completion logic */}}
                  >
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
