import React from 'react';
import { Link } from 'react-router-dom';

export default function Overview() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Account</h1>

      {/* Membership Details */}
      <section className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Membership Details</h2>
        <p className="mb-1">Member since <strong>January 2023</strong></p>
        <p className="mb-1">Plan: <strong>Standard</strong> — 1080p, ad-free watching</p>
        <p className="mb-1">Next payment: <strong>July 3, 2025</strong></p>
        <p className="mb-4">Payment method: <strong>VISA **** 0000</strong></p>

        <div className="space-y-2">
          <Link to="/change-plan" className="text-blue-600 hover:underline block">
            Change plan
          </Link>
          <Link to="/manage-payment" className="text-blue-600 hover:underline block">
            Manage payment method
          </Link>
          <Link to="/redeem" className="text-blue-600 hover:underline block">
            Redeem gift or promo code
          </Link>
          <Link to="/backup-payment" className="text-blue-600 hover:underline block">
            Buy an extra member slot <span className="text-xs text-red-600 ml-1">(New)</span>
          </Link>
          <Link to="/devices" className="text-blue-600 hover:underline block">
            Manage access and devices
          </Link>
        </div>
      </section>
    </div>
  );
}
