
import React from 'react';

export default function SignOut() {
  const handleSignOut = () => {
    alert('Signing out of all devices...');
    // Add logic to sign out of all devices
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Sign Out of All Devices</h1>
      <p className="mb-6 text-gray-700">Sign out of all devices connected to your account.</p>

      <button
        onClick={handleSignOut}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
}
