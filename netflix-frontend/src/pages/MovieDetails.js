import { useParams, Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { movies } from './data/movies';

export default function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <h2 className="text-white text-2xl">Movie not found.</h2>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-white font-bold mb-4">{movie.title}</h1>
      <p className="text-gray-400 text-lg mb-8">{movie.description}</p>
      <div className="w-full max-w-3xl mb-8">
        <VideoPlayer src={movie.videoUrl} />
      </div>
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Back to Home
      </Link>
    </div>
  );
}