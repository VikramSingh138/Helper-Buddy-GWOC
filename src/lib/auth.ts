import { useState, useEffect } from 'react';

interface User {
  id: string;
  role: string;
  name: string;
  email: string;
}

export function logout() {
  localStorage.removeItem('user');
  window.location.reload(); // Force a reload to clear all states
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isServiceProvider, setIsServiceProvider] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsServiceProvider(parsedUser.userType === 'serviceProvider');
      } catch (error) {
        console.error('Error parsing user data from local storage:', error);
        setUser(null);
        setIsServiceProvider(false);
      }
    } else {
      setUser(null);
      setIsServiceProvider(false);
    }
  }, []);

  const login = async (provider: any, token: string) => {
    // Store user & token in state or context
    setUser({ id: provider.id, email: provider.email, name: provider.name, role: provider.role });
    // Also store token, e.g., localStorage
    localStorage.setItem("spToken", token);
  };

  return { user, isServiceProvider, login };
}
