import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const trending = [
  {
    id: 1,
    title: 'Ginny & Georgia',
    image: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY679_.jpg',
  },
  {
    id: 2,
    title: 'Rhythm + Flow',
    image: 'https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg',
  },
  {
    id: 3,
    title: 'Big Mouth',
    image: 'https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_SY679_.jpg',
  },
  {
    id: 4,
    title: 'Squid Game',
    image: 'https://m.media-amazon.com/images/I/91z5KuonXrL._AC_SY679_.jpg',
  },
  {
    id: 5,
    title: 'You',
    image: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY679_.jpg',
  },
];

const reasons = [
  {
    title: 'Enjoy on your TV',
    desc: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    icon: '💻',
  },
  {
    title: 'Download your shows to watch offline',
    desc: 'Save your favorites easily and always have something to watch.',
    icon: '⬇️',
  },
  {
    title: 'Watch everywhere',
    desc: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    icon: '📱',
  },
  {
    title: 'Create profiles for kids',
    desc: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    icon: '🧒',
  },
];

const faqs = [
  {
    q: 'What is Netflix?',
    a: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  },
  {
    q: 'How much does Netflix cost?',
    a: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.',
  },
  {
    q: 'Where can I watch?',
    a: 'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.',
  },
  {
    q: 'How do I cancel?',
    a: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
  },
  {
    q: 'What can I watch on Netflix?',
    a: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    q: 'Is Netflix good for kids?',
    a: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
  },
];

export default function Landing() {
  const [email, setEmail] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/7e1e5c7e-2b7d-4b3e-8e7e-2c2e7e7e7e7e/7e1e5c7e-2b7d-4b3e-8e7e-2c2e7e7e7e7e_PL-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      {/* Red glow at the bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-40 z-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(229,9,20,0.6) 0%, rgba(0,0,0,0) 80%)',
        }}
      ></div>
      <header className="relative z-30 flex justify-between items-center px-8 py-6">
        <span className="text-3xl font-bold text-red-600">NETFLIX</span>
        <div className="flex items-center gap-4">
          {/* Language selector (optional) */}
          <select
            className="bg-transparent border border-gray-500 text-white px-2 py-1 rounded text-sm"
            defaultValue="en"
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="pl">Polski</option>
          </select>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 uppercase text-sm tracking-wider"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-red-600 text-white px-4 py-2 rounded font-semibold hover:bg-red-700 uppercase text-sm tracking-wider"
            >
              Sign In
            </Link>
          )}
        </div>
      </header>
      <main className="relative z-30 flex flex-col items-center justify-center flex-1 text-center px-4 min-h-[70vh]">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-2xl text-white mb-4">Starts at 33 zł. Cancel anytime.</h2>
        <p className="text-white mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form
          onSubmit={handleGetStarted}
          className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-xl mb-12"
        >
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-3 rounded w-full md:w-2/3 bg-gray-900 bg-opacity-80 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold text-lg"
          >
            Get Started &gt;
          </button>
        </form>

        {/* Trending Now */}
        <section className="w-full max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl text-white font-bold mb-4 text-left">Trending Now</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {trending.map((movie, idx) => (
              <div key={movie.id} className="flex-shrink-0 w-40 relative group">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="rounded-lg shadow-lg w-full h-56 object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-2xl font-bold px-2 rounded">
                  {idx + 1}
                </span>
                <h3 className="text-white mt-2 text-base font-semibold">{movie.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* More Reasons to Join */}
        <section className="w-full max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl text-white font-bold mb-4 text-left">More Reasons to Join</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {reasons.map(reason => (
              <div
                key={reason.title}
                className="bg-[#181824] rounded-lg p-6 text-left text-white flex flex-col items-start shadow-md"
              >
                <div className="text-3xl mb-2">{reason.icon}</div>
                <h4 className="font-bold mb-2">{reason.title}</h4>
                <p className="text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl text-white font-bold mb-4 text-left">Frequently Asked Questions</h2>
          <div>
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="mb-2">
                <button
                  className="w-full flex justify-between items-center bg-[#222] text-white text-left px-6 py-4 rounded mb-1 font-semibold focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.q}
                  <span className="text-2xl">{openFaq === idx ? '-' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="bg-[#181824] text-white px-6 py-4 rounded-b mb-1 text-left">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* You can add a footer here if you want */}
    </div>
  );
}