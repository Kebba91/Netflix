import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-50 flex justify-between items-center px-6 sm:px-12 py-4">
      {/* Netflix Logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="h-10"
        />
      </Link>

      {/* Right controls */}
      <div className="flex items-center space-x-4">
        {/* Language (can be disabled if not using i18n) */}
        <button className="text-white border border-white rounded px-2 py-1 text-sm bg-black bg-opacity-40">
          🌐 English
        </button>
        {/* Sign In Button */}
        <Link
          to="/login"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 text-sm rounded"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}