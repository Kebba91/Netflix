import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Account Overview</h1>
      <p className="mb-4 text-gray-700">Welcome to your account dashboard.</p>
      <button
        onClick={() => navigate('/overview')}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Go to Account Settings
      </button>
    </div>
  );
}
