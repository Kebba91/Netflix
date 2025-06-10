import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Profile</h1>
      <section className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <p className="mb-1">Name: <strong>John Doe</strong></p>
        <p className="mb-1">Email: <strong>john.doe@example.com</strong></p>
        <p className="mb-4">Language: <strong>English</strong></p>
        <div className="space-y-2">
          <Link to="/edit-profile" className="text-blue-600 hover:underline block">Edit profile</Link>
          <Link to="/change-email" className="text-blue-600 hover:underline block">Change email</Link>
          <Link to="/language-preferences" className="text-blue-600 hover:underline block">Language preferences</Link>
        </div>
      </section>
    </div>
  );
}
