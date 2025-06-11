// src/pages/Profile.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Profile</h1>
      <section className="bg-[#1f1f1f] p-6 rounded-lg shadow text-white">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <p className="mb-1">Name: <strong>{user?.name}</strong></p>
        <p className="mb-1">Email: <strong>{user?.email}</strong></p>
        <p className="mb-4">Language: <strong>{user?.language}</strong></p>
        <div className="space-y-2">
          <Link to="/edit-profile" className="text-red-500 hover:underline block">Edit profile</Link>
          <Link to="/change-email" className="text-red-500 hover:underline block">Change email</Link>
          <Link to="/language-preferences" className="text-red-500 hover:underline block">Language preferences</Link>
        </div>
      </section>
    </div>
  );
}
