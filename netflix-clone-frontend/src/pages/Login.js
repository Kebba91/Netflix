import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake login
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/');
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/7e1e5c7e-2b7d-4b3e-8e7e-2c2e7e7e7e7e/7e1e5c7e-2b7d-4b3e-8e7e-2c2e7e7e7e7e_PL-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <form
        onSubmit={handleSubmit}
        className="relative bg-gray-900 bg-opacity-80 p-8 rounded shadow-md w-80 z-10"
      >
        <h2 className="text-2xl text-white mb-6 font-bold">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 rounded bg-gray-800 text-white"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-3 py-2 rounded bg-gray-800 text-white"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
        >
          Sign In
        </button>
        <p className="text-gray-400 mt-4 text-sm">
          New to Netflix?{' '}
          <Link to="/register" className="text-red-500 hover:underline">
            Sign up now
          </Link>
        </p>
      </form>
    </div>
  );
}