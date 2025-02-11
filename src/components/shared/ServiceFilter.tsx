'use client';

import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface ServiceFilterProps {
  onFilter: (filters: { category?: string; pincode?: string }) => void;
}

export default function ServiceFilter({ onFilter }: ServiceFilterProps) {
  const [category, setCategory] = useState('');
  const [pincode, setPincode] = useState('');

  const handleApplyFilters = () => {
    onFilter({ category, pincode });
  };

  const handleClearFilters = () => {
    setCategory('');
    setPincode('');
    onFilter({});
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Filter Services</h3>
      
      <div className="space-y-4">
        <div>
          <Input
            className='form-control'
            label="Category"
            type="text"
            placeholder="e.g., Cleaning, Plumbing"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        
        <div>
          <Input
            className='form-control'
            label="Pincode"
            type="text"
            placeholder="Enter pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <Button variant="tertiary" onClick={handleClearFilters}>Clear</Button>
          <Button variant='secondary' onClick={handleApplyFilters}>Apply</Button>
        </div>
      </div>
    </div>
  );
}
