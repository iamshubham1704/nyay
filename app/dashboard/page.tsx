'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function LawyerDashboard() {
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [cases, setCases] = useState<Array<{
    id: string;
    title: string;
    uploadedAt: string;
    status: string;
  }>>([
    // Example data; replace with real data fetching logic as needed
    {
      id: '1',
      title: 'Case A',
      uploadedAt: '2024-06-01',
      status: 'Pending',
    },
    {
      id: '2',
      title: 'Case B',
      uploadedAt: '2024-06-02',
      status: 'Approved',
    },
  ]);
  const router = useRouter();

  // Use the email as the lawyer's name for now
  const lawyerName = userEmail ?? "Lawyer";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        setLoading(false);
      } else {
        router.replace('/login'); // redirect if not logged in
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div className="text-center py-10">Loading dashboard...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Lawyer Dashboard</h1>

        <div className="mb-4 flex justify-between items-center">
          <p className="text-gray-600">
  Welcome back, <strong>{lawyerName}</strong> 👨‍⚖️
</p>

          
        </div>

        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-indigo-50 text-indigo-700">
              <tr>
                <th className="px-4 py-2 text-left">Case Title</th>
                <th className="px-4 py-2 text-left">Uploaded On</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c) => (
                <tr key={c.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{c.title}</td>
                  <td className="px-4 py-2">{c.uploadedAt}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        c.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button className="bg-gray-100 text-indigo-700 px-3 py-1 rounded hover:bg-indigo-100 text-sm">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
