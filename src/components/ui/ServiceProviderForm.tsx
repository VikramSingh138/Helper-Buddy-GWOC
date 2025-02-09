'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ServiceProviderForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = async () => {
    // Implement service submission logic here
    const serviceData = {
      title,
      description,
      price,
      category,
      availablePincodes: [pincode], // Assuming a single pincode for simplicity
    };
    console.log('Service data to submit:', serviceData);

    // In a real application, you would send this data to an API endpoint:
    // try {
    //   const response = await fetch('/api/services', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(serviceData),
    //   });
    //   if (!response.ok) {
    //     throw new Error('Failed to submit service');
    //   }
    //   console.log('Service submitted successfully');
    // } catch (error) {
    //   console.error('Error submitting service:', error);
    // }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4">Add Service</h3>
      <div className="space-y-4">
        <Input
          label="Title"
          type="text"
          placeholder="Service title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="Description"
          type="text"
          placeholder="Service description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label="Price"
          type="number"
          placeholder="Service price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          label="Category"
          type="text"
          placeholder="Service category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Input
          label="Pincode"
          type="text"
          placeholder="Service pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}
