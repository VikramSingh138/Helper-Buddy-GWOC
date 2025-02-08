'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('user');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name, phone, userType }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      alert(data.message);
      if (data.success) {
        router.push('/login');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration error');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleRegister}>
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
          autoComplete="new-password"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}