'use client';

import { useState } from 'react';

export default function AIAnalysisPage() {
  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (file) {
      // Simulate AI analysis response
      setAnalysis("✅ AI Analysis: Your case seems to fall under property dispute. We recommend consulting a civil lawyer. Document review suggests missing registration papers.");
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">AI Legal Analysis</h1>
        <p className="mb-6 text-gray-600">Upload your case file (PDF or DOCX) to get instant AI-generated legal suggestions.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mb-4"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Analyze
          </button>
        </form>

        {analysis && (
          <div className="mt-6 p-4 border border-indigo-200 rounded bg-indigo-50 text-indigo-900">
            <h2 className="font-semibold mb-2">AI Result:</h2>
            <p>{analysis}</p>
          </div>
        )}
      </div>
    </div>
  );
}
