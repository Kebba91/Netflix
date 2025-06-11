import React from 'react';
import { Link } from 'react-router-dom';

export default function Account() {
  return (
    <main className="flex-1 px-10 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-1">Account</h1>
      <h2 className="text-lg text-gray-600 mb-4">Membership Details</h2>

      {/* Membership Info */}
      <div className="mb-6">
        <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded mb-2">
          Member since January 2020
        </span>
        <p className="font-semibold">Standard plan</p>
        <p className="text-sm text-gray-700">Next payment: July 3, 2023</p>
        <p className="text-sm text-gray-700 mb-2">VISA **** **** **** 5566</p>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Manage membership
        </button>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-md font-semibold mb-2">Quick Links:</h3>
        <ul className="space-y-2 text-red-600">
          <li><Link to="/change-plan" className="hover:underline">Change plan</Link></li>
          <li><Link to="/manage-payment" className="hover:underline">Manage payment method</Link></li>
          <li>
            <Link to="/extra-member" className="hover:underline">
              Buy an extra member slot
              <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">New</span>
            </Link>
          </li>
          <li><Link to="/access-devices" className="hover:underline">Manage access and devices</Link></li>
          <li><Link to="/update-password" className="hover:underline">Update password</Link></li>
          <li><Link to="/transfer-profile" className="hover:underline">Transfer a profile</Link></li>
          <li><Link to="/parental-controls" className="hover:underline">Adjust parental controls</Link></li>
          <li><Link to="/edit-settings" className="hover:underline">Edit settings</Link></li>
        </ul>
      </div>
    </main>
  );
}
