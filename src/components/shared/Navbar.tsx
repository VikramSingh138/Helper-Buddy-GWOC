'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import { UserCircle, LogOut } from 'lucide-react';
import { logout } from '@/lib/auth'; // Add this line to import the logout function
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { user, isServiceProvider } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!mounted) return null;

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          Helper Buddy
        </Link>

        <div className="flex items-center gap-6">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <UserCircle className="w-6 h-6" />
                <span className="font-medium">{user.name}</span>
              </div>
              
              {isServiceProvider ? (
                <div className="flex items-center gap-4">
                  <Link 
                    href="/provider/dashboard" 
                    className="hover:text-primary transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link 
                    href="/provider/requests" 
                    className="hover:text-primary transition-colors"
                  >
                    Active Services
                  </Link>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link 
                    href="/services" 
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                  <Link 
                    href="/bookings" 
                    className="hover:text-primary transition-colors"
                  >
                    My Bookings
                  </Link>
                </div>
              )}
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <div className="flex gap-4">
              <Link 
                href="/login"
                className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/register"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
