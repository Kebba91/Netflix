//import { useNavigate } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import TrendingNow from '../components/TrendingNow';
//import NetflixHero from '../components/NetflixHero';  
import { movies } from '../data/movies';
import { users, genres } from '../data/sampleData';

export default function Home() {
  const featured = movies[0];

  return (
    <div className="netflix-container">
      {/* Hero Section */}
      {/* <NetflixHero featured={featured} /> */}
      {/* Popular on Netflix Section */}
      <section className="section">
        <h2>Popular on Netflix</h2>
        <div className="scroll-row">
          {movies.slice(1, 8).map((movie) => (
            <div key={movie.id} className="card">
              <img src={movie.posterUrl} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* My List Section */}
      <section className="section">
        <h2>My List</h2>
        <div className="avatars-row">
          {users.map((user) => (
            <div key={user.id} className="avatar">
              <img src={user.avatarUrl} alt={user.name} />
              <span>{user.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Genres Section */}
      <section className="section">
        <h2>Genres</h2>
        <div className="genres-row">
          {genres.map((genre) => (
            <div key={genre.id} className="genre">
              {genre.name}
            </div>
          ))}
        </div>
      </section>
    <div className="bg-black min-h-screen">
      {/* Hero Banner */}
      <HeroBanner featured={featured} />

      {/* Trending Now Row */}
      <TrendingNow movies={movies} />
    </div>

      {/* More Reasons to Join */}
      <div className="mt-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl text-white font-bold mb-6">More Reasons to Join</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* TV */}
          <div className="bg-[#18181b] rounded-xl p-6 text-white flex flex-col items-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3l4 4 4-4"/>
            </svg>
            <h3 className="font-bold mb-2 text-lg text-center">Enjoy on your TV</h3>
            <p className="text-center text-gray-300">Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          {/* Download */}
          <div className="bg-[#18181b] rounded-xl p-6 text-white flex flex-col items-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/>
            </svg>
            <h3 className="font-bold mb-2 text-lg text-center">Download your shows to watch offline</h3>
            <p className="text-center text-gray-300">Save your favorites easily and always have something to watch.</p>
          </div>
          {/* Devices */}
          <div className="bg-[#18181b] rounded-xl p-6 text-white flex flex-col items-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="2" y="7" width="20" height="13" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/>
              <rect x="7" y="2" width="10" height="3" rx="1" strokeWidth="2" stroke="currentColor" fill="none"/>
            </svg>
            <h3 className="font-bold mb-2 text-lg text-center">Watch everywhere</h3>
            <p className="text-center text-gray-300">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          {/* Kids */}
          <div className="bg-[#18181b] rounded-xl p-6 text-white flex flex-col items-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="8" r="4" strokeWidth="2" stroke="currentColor" fill="none"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 20c0-4 8-6 10-6s10 2 10 6"/>
            </svg>
            <h3 className="font-bold mb-2 text-lg text-center">Create profiles for kids</h3>
            <p className="text-center text-gray-300">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 px-4 max-w-3xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
  <div className="bg-[#222]">
    {[
      {
        q: "What is Netflix?",
        a: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There’s always something new to discover and new TV shows and movies are added every week!`
      },
      {
        q: "How much does Netflix cost?",
        a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 29 zł to 60 zł a month. No extra costs, no contracts."
      },
      {
        q: "Where can I watch?",
        a: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on any device with the Netflix app — Smart TVs, phones, tablets, streaming devices, game consoles."
      },
      {
        q: "How do I cancel?",
        a: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks."
      },
      {
        q: "What can I watch on Netflix?",
        a: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more."
      },
      {
        q: "Is Netflix good for kids?",
        a: "The Netflix Kids experience is included in your membership. Kids profiles come with PIN-protected parental controls so you can restrict content as needed."
      }
    ].map((item, index) => (
      <details
        key={index}
        className="group border-b border-[#333] bg-[#333] transition-all duration-300"
        open={index === 0}
      >
        <summary className="cursor-pointer font-semibold text-xl md:text-2xl flex items-center justify-between px-6 py-5 text-white hover:bg-[#444]">
          <span>{item.q}</span>
          <span className="text-white text-3xl font-light transition-transform group-open:rotate-45">+</span>
        </summary>
        <div className="px-6 pb-6 pt-1 text-gray-100 whitespace-pre-line text-lg">{item.a}</div>
      </details>
    ))}
  </div>
</div>
{/* Ready to Watch Section */}
<div className="bg-black text-white text-center py-10 px-4">
  <p className="text-xl md:text-2xl font-medium mb-4">
    Ready to watch? Enter your email to create or restart your membership.
  </p>
  <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mt-4">
    <input
      type="email"
      placeholder="Email address"
      className="w-full md:flex-1 px-5 py-4 rounded-md bg-[#1b1b1b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
      required
    />
    <button
      type="submit"
      className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold text-lg px-6 py-4 rounded-md"
    >
      Get Started
    </button>
  </form>
</div>
{/* Footer Section */}
<footer className="bg-black text-gray-400 px-6 py-12 mt-16 text-sm">
  <div className="max-w-6xl mx-auto">
    <p className="mb-8">Questions? Call <a href="#" className="underline">000-800-919-1694</a></p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {[
        ['FAQ', 'Investor Relations', 'Privacy', 'Speed Test'],
        ['Help Center', 'Jobs', 'Cookie Preferences', 'Legal Notices'],
        ['Account', 'Ways to Watch', 'Corporate Information', 'Only on Netflix'],
        ['Media Center', 'Terms of Use', 'Contact Us']
      ].map((column, i) => (
        <div key={i}>
          {column.map((link, j) => (
            <a key={j} href="#" className="block hover:underline mb-2">{link}</a>
          ))}
        </div>
      ))}
    </div>
    <div className="mb-4">
      <select className="bg-transparent border border-gray-500 px-3 py-2 rounded text-white">
        <option>English</option>
        <option>Polski</option>
      </select>
    </div>
    <p className="text-gray-500">Netflix Poland Clone © 2025</p>
  </div>
</footer>
</div>
);
}