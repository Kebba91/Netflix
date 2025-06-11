import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Profiles() {
  return (
    <>
      <div className="flex min-h-screen bg-black text-white">
        {/* Sidebar */}
        <aside className="w-64 bg-[#141414] p-6 space-y-4 border-r border-gray-800">
          <Link to="/" className="text-red-600 text-xl font-bold block mb-6 hover:underline">
            &lt; Back to Netflix
          </Link>
          <nav className="space-y-3 text-sm">
            <Link to="/overview" className="block hover:text-red-500">Overview</Link>
            <Link to="/membership" className="block hover:text-red-500">Membership</Link>
            <Link to="/security" className="block hover:text-red-500">Security</Link>
            <Link to="/devices" className="block hover:text-red-500">Devices</Link>
            <Link to="/profiles" className="block text-red-500 font-semibold">Profiles</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-10 max-w-4xl mx-auto">
          {/* Parental Controls Section */}
          <section className="space-y-4 border-b border-gray-700 pb-6">
            <h2 className="text-xl font-semibold">Parental Controls and Permissions</h2>

            <Link to="/parental-controls" className="block text-red-500 hover:underline">
              Adjust parental controls
            </Link>
            <p className="text-gray-400 text-sm">Set maturity ratings, block titles</p>

            <Link to="/transfer-profile" className="block text-red-500 hover:underline mt-2">
              Transfer a profile
            </Link>
            <p className="text-gray-400 text-sm">Copy a profile to another account</p>
          </section>

          {/* Profile Settings Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold">Profile Settings</h2>

            <div className="space-y-3">
              <Link
                to="/profile/kebba_k"
                className="block bg-[#1a1a1a] p-4 rounded hover:bg-[#2a2a2a] transition-colors"
              >
                <p className="text-lg font-semibold">Kebba_k</p>
                <p className="text-sm text-gray-400">Your Profile</p>
              </Link>

              <Link
                to="/profile/sukar-adama"
                className="block bg-[#1a1a1a] p-4 rounded hover:bg-[#2a2a2a] transition-colors"
              >
                <p className="text-lg font-semibold">Sukar & Adama</p>
              </Link>

              <Link
                to="/profile/dzieci"
                className="block bg-[#1a1a1a] p-4 rounded hover:bg-[#2a2a2a] transition-colors"
              >
                <p className="text-lg font-semibold">Dzieci</p>
              </Link>

              <div className="bg-[#1a1a1a] p-4 rounded">
                <p className="text-lg text-gray-400">Add Profile</p>
                <p className="text-sm text-gray-400">Add up to 5 profiles for anyone who lives with you</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
