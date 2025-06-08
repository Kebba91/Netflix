import { useState } from 'react';
import { Link } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'Stranger Things',
    image: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY679_.jpg',
    description: 'A love letter to the 80s classics that captivated a generation.',
    banner: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY679_.jpg',
  },
  {
    id: 2,
    title: 'Money Heist',
    image: 'https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg',
    description: 'A criminal mastermind who goes by "The Professor" has a plan.',
    banner: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
  },
  {
    id: 3,
    title: 'The Witcher',
    image: 'https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_SY679_.jpg',
    description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny.',
    banner: 'https://m.media-amazon.com/images/I/81dQwQlmAXL._AC_SY679_.jpg',
  },
  {
    id: 4,
    title: 'Squid Game',
    image: 'https://m.media-amazon.com/images/I/91z5KuonXrL._AC_SY679_.jpg',
    description: 'Hundreds of cash-strapped players accept a strange invitation to compete in deadly games.',
    banner: 'https://m.media-amazon.com/images/I/91z5KuonXrL._AC_SY679_.jpg',
  },
  {
    id: 5,
    title: 'Breaking Bad',
    image: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY679_.jpg',
    description: 'A high school chemistry teacher turned methamphetamine producer.',
    banner: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY679_.jpg',
  },
];

export default function Home() {
  // Pick a random movie for the hero background
  const [hero] = useState(movies[Math.floor(Math.random() * movies.length)]);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] flex items-end"
        style={{
          backgroundImage: `url(${hero.banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 drop-shadow-lg">{hero.title}</h1>
          <p className="text-lg text-gray-200 max-w-xl mb-6 drop-shadow">{hero.description}</p>
          <Link
            to={`/movie/${hero.id}`}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold text-lg"
          >
            ▶ Play
          </Link>
        </div>
      </div>

      {/* Movie Rows */}
      <div className="p-8">
        <h2 className="text-2xl text-white font-bold mb-4">Popular on Netflix</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {movies.map(movie => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="flex-shrink-0 w-48"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
              />
              <h3 className="text-white mt-2 text-lg font-semibold">{movie.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}