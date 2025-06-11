import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('authChanged'));
    alert('You have been signed out of all devices.');
    navigate('/');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <h1 className="text-3xl font-bold mb-6">Signing Out...</h1>
      <p className="mb-6 text-gray-700">Redirecting you to the landing page.</p>
    </div>
  );
}
