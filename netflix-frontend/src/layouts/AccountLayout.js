import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function AccountLayout() {
  const location = useLocation();

  const sidebarLinks = [
    { label: 'Overview', path: '/overview' },
    { label: 'Membership', path: '/membership-details' },
    { label: 'Security', path: '/security' },
    { label: 'Devices', path: '/devices' },
    { label: 'Profile', path: '/profile' },
    { label: 'Help Center', path: '/help' },
    { label: 'Transfer Profile', path: '/transfer' },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-6 border-r">
        <Link to="/" className="text-red-600 text-2xl font-bold mb-6 hover:underline">
         Netflix
         </Link>
        <nav className="space-y-3 text-sm font-medium">
          {sidebarLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-2 py-1 rounded hover:bg-gray-200 ${
                location.pathname === link.path ? 'text-red-600 font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}
