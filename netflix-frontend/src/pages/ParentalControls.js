
import React from 'react';

export default function ParentalControls() {
  const handleAdjustParentalControls = () => {
    alert('Redirecting to adjust parental controls...');
    // Add logic to adjust parental controls
  };

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Adjust Parental Controls</h1>
      <p className="mb-6 text-gray-700">Set up parental controls for your account.</p>

      <button
        onClick={handleAdjustParentalControls}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Adjust Parental Controls
      </button>
    </div>
  );
}
