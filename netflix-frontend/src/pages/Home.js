import { useState, useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}`,
  topRated: `/movie/top_rated?api_key=${API_KEY}`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// Mock data for "Continue Watching"
const mockContinueWatching = [
  {
    id: 1,
    title: 'Stranger Things',
    poster_path: '/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
  },
  {
    id: 2,
    title: 'Breaking Bad',
    poster_path: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
  },
];

export default function Home() {
  const [featured, setFeatured] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3${requests.trending}`);
        if (!res.ok) throw new Error('Failed to fetch featured content');
        const data = await res.json();
        setFeatured(data.results[Math.floor(Math.random() * data.results.length)]);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchFeatured();
  }, []);

  if (error) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-red-600 text-xl">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      {featured && <HeroBanner featured={featured} />}
      <MovieRow title="Continue Watching for Kebba_k" mockData={mockContinueWatching} />
      <MovieRow title="Trending Now" fetchUrl={requests.trending} />
      <MovieRow title="Top Rated" fetchUrl={requests.topRated} />
      <MovieRow title="Action Movies" fetchUrl={requests.actionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.comedyMovies} />
      <MovieRow title="Horror Movies" fetchUrl={requests.horrorMovies} />
      <MovieRow title="Romance Movies" fetchUrl={requests.romanceMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.documentaries} />
    </div>
  );
}
