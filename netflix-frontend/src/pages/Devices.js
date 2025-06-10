import React from 'react';
import { Link } from 'react-router-dom';

export default function Devices() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Devices</h1>
      <section className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Manage Devices</h2>
        <p className="mb-1">Device 1: <strong>iPhone 12</strong></p>
        <p className="mb-1">Device 2: <strong>Samsung Galaxy S21</strong></p>
        <p className="mb-4">Device 3: <strong>MacBook Pro</strong></p>
        <div className="space-y-2">
          <Link to="/add-device" className="text-blue-600 hover:underline block">Add a new device</Link>
          <Link to="/remove-device" className="text-blue-600 hover:underline block">Remove a device</Link>
          <Link to="/device-settings" className="text-blue-600 hover:underline block">Device settings</Link>
        </div>
      </section>
    </div>
  );
}
