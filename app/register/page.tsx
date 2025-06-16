'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function LawyerRegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '', specialization: '' });
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      router.push('/dashboard'); // ✅ go to dashboard after signup
    } catch (err: any) {
      console.error('Registration Error:', err);
      setError(err.message || 'Registration failed');
    }
  };
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">Lawyer Registration</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={form.name}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={form.password}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Specialization</label>
            <select
              name="specialization"
              onChange={handleChange}
              value={form.specialization}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a field</option>
              <option value="Family">Family Law</option>
              <option value="Criminal">Criminal Law</option>
              <option value="Property">Property Law</option>
              <option value="Corporate">Corporate Law</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
