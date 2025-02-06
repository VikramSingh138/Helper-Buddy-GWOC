'use client';

import SearchBar from '@/components/ui/SearchBar';
import { useState } from 'react';
import { Service } from '@/lib/types';
import ServiceCard from '@/components/ui/ServiceCard';

// Sample data - Replace with actual API call
const sampleServices: Service[] = [
  {
    id: '1',
    title: 'House Cleaning',
    description: 'Professional house cleaning services',
    price: 999,
    category: 'Cleaning',
    availablePincodes: ['400001', '400002']
  },
  {
    id: '2',
    title: 'Plumbing',
    description: 'Expert plumbing services',
    price: 599,
    category: 'Plumbing',
    availablePincodes: ['400001', '400003']
  },
  // Add more sample services
];

export default function Home() {
  const [services, setServices] = useState<Service[]>(sampleServices);

  const handleSearch = (query: string) => {
    if (!query) {
      setServices(sampleServices);
      return;
    }
    
    const filtered = sampleServices.filter(service => 
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase()) ||
      service.category.toLowerCase().includes(query.toLowerCase())
    );
    setServices(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Trusted Service Providers</h1>
        <p className="text-gray-600 mb-8">Book reliable services at your doorstep</p>
        <div className="max-w-2xl mx-auto">
          <SearchBar 
            onSearch={handleSearch}
            suggestions={['Cleaning', 'Plumbing', 'Electrical', 'Painting']}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard 
            key={service.id}
            service={service}
          />
        ))}
      </section>
    </div>
  );
}
