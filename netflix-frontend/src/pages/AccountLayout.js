// src/layouts/AccountLayout.js
import { NavLink, Outlet } from 'react-router-dom';

export default function AccountLayout() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <aside className="w-64 p-6 bg-[#141414] space-y-4 border-r border-gray-700">
        <h2 className="text-xl font-bold mb-4">Account</h2>
        <nav className="space-y-2">
          <NavLink to="/overview" className="block hover:text-red-500">Overview</NavLink>
          <NavLink to="/membership" className="block hover:text-red-500">Membership</NavLink>
          <NavLink to="/security" className="block hover:text-red-500">Security</NavLink>
          <NavLink to="/devices" className="block hover:text-red-500">Devices</NavLink>
          <NavLink to="/profile" className="block hover:text-red-500">Profile</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
