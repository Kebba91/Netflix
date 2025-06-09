import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [profileName, setProfileName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedProfile = JSON.parse(localStorage.getItem('activeProfile'));
    setUser(storedUser);
    setProfileName(storedProfile?.name || '');
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('activeProfile');
    setUser(null);
    setProfileName('');
    navigate('/login');
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-6 sm:px-12 py-4 bg-black bg-opacity-80 text-white">
      {/* Left: Logo + Navigation */}
      <div className="flex items-center space-x-6">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="h-8"
          />
        </Link>
        <div className="hidden md:flex space-x-4 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/tv-shows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/games">Games</Link>
          <Link to="/new-popular">New & Popular</Link>
          <Link to="/my-list">My List</Link>
          <Link to="/languages">Browse by Languages</Link>
        </div>
      </div>

      {/* Right: Icons + Profile */}
      {user && (
        <div className="flex items-center space-x-4 relative">
          <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer" />
          <Link to="/kids" className="text-sm hidden sm:inline">Kids</Link>
          <div className="relative">
            <BellIcon className="w-5 h-5 cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full px-1">2</span>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                src="https://occ-0-3933-3934.1.nflxso.net/art/9c3b2/9c3b2e8c6e3b4e3e8e3b2e8c6e3b4e3e.png"
                alt="Profile"
                className="w-8 h-8 rounded"
              />
              <span className="text-sm hidden sm:inline">{profileName || user.email}</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-black border border-gray-700 rounded shadow-lg z-50">
                <Link to="/profiles" className="block px-4 py-2 text-sm hover:bg-gray-800">Manage Profiles</Link>
                <Link to="/transfer" className="block px-4 py-2 text-sm hover:bg-gray-800">Transfer Profile</Link>
                <Link to="/membership" className="block px-4 py-2 text-sm hover:bg-gray-800">Account</Link>
                <Link to="/help" className="block px-4 py-2 text-sm hover:bg-gray-800">Help Center</Link>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800"
                >
                  Sign Out of Netflix
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
