'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password, userType }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      alert(data.message);
      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        if (data.user.userType === 'serviceProvider') {
          router.push('/provider/dashboard');
        } else {
          router.push('/services');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login error');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          autoComplete="off"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="serviceProvider">Service Provider</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}