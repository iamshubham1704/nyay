'use client';

import { useState } from 'react';

export default function UploadCasePage() {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload a file');
      return;
    }

    // Mock submit
    console.log('Uploaded File:', file);
    console.log('Description:', description);
    alert('Case uploaded for AI analysis (mock)');
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Upload Case File
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Case File</label>
            <input
              type="file"
              onChange={handleFileChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Case Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Briefly describe the case context..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Analyze with AI
          </button>
        </form>
      </div>
    </main>
  );
}
