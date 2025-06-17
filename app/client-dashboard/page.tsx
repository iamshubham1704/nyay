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
        router.replace('/client-login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div className="text-center py-10">Loading dashboard...</div>;
  }

  return (
    <main className="min-h-screen p-4 sm:p-6 md:p-10 bg-gray-100 text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Welcome, {userEmail}</h1>
      <p className="text-gray-700 mb-6 text-sm sm:text-base">
        You can upload your case files and track the status here.
      </p>

      <div className="bg-white rounded-md shadow p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">📂 Upload Case File</h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="file"
            className="border p-2 rounded w-full sm:w-auto flex-1"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full sm:w-auto">
            Submit Case
          </button>
        </div>
      </div>

      {/* Responsive Grid Layout for Future Case Cards */}
      <section className="mt-10">
        <h3 className="text-xl font-medium mb-4">🧾 Your Submitted Cases</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example card (can map over case data later) */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-800">Case #1</h4>
            <p className="text-sm text-gray-600 mt-1">Status: In Review</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-gray-800">Case #2</h4>
            <p className="text-sm text-gray-600 mt-1">Status: Resolved</p>
          </div>
        </div>
      </section>
    </main>
  );
}
