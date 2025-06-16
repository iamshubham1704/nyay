'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function ClientDashboard() {
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        setLoading(false);
      } else {
        router.replace('/client-login'); // redirect if not logged in
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div className="text-center py-10">Loading dashboard...</div>;
  }

  return (
    <main className="min-h-screen p-10 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Welcome, {userEmail}</h1>
      <p className="text-gray-700 mb-6">You can upload your case files and track the status here.</p>

      <div className="bg-white rounded-md shadow p-6">
        <h2 className="text-xl font-semibold mb-4">📂 Upload Case File</h2>
        <input type="file" className="block border p-2 rounded" />
        <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Submit Case
        </button>
      </div>
    </main>
  );
}
