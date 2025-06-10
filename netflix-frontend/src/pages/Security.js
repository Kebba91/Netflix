import React from 'react';
import { Link } from 'react-router-dom';

export default function Security() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Security</h1>
      <section className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
        <p className="mb-1">Password: <strong>********</strong></p>
        <p className="mb-1">Two-factor authentication: <strong>Enabled</strong></p>
        <p className="mb-4">Recent activity: <strong>Last login from IP 192.168.1.1</strong></p>
        <div className="space-y-2">
          <Link to="/change-password" className="text-blue-600 hover:underline block">Change password</Link>
          <Link to="/manage-2fa" className="text-blue-600 hover:underline block">Manage two-factor authentication</Link>
          <Link to="/security-activity" className="text-blue-600 hover:underline block">View recent activity</Link>
        </div>
      </section>
    </div>
  );
}
