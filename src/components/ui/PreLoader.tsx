'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PreLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        if (newProgress === 100) {
          clearInterval(timer);
        }
        return newProgress;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <Image 
        src="/helperbuddy-logo.svg" 
        alt="HelperBuddy Logo" 
        width={200} 
        height={200}
      />
      <div className="w-64 h-2 bg-gray-200 rounded-full mt-4">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
