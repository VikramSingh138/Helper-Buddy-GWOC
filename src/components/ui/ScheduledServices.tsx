'use client';

import { Service } from '@/lib/types';

interface ScheduledServicesProps {
  services: Service[];
}

export default function ScheduledServices({ services }: ScheduledServicesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map(service => (
        <div key={service.id} className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="text-gray-600">{service.dateTime ? service.dateTime.toLocaleString() : 'No date available'}</p>
          <p className="text-gray-600">Pincode: {service.pincode}</p>
          <p className="text-gray-600">Status: {service.status}</p>
        </div>
      ))}
    </div>
  );
}
