import { useParams, Link } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'Stranger Things',
    image: 'https://occ-0-58-64.1.nflxso.net/art/8e7c2/8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b.jpg',
    description: 'A love letter to the 80s classics that captivated a generation.',
  },
  {
    id: 2,
    title: 'Money Heist',
    image: 'https://occ-0-58-64.1.nflxso.net/art/2b8e7c/2b8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b8e7c2b.jpg',
    description: 'A criminal mastermind who goes by "The Professor" has a plan.',
  },
  // Add more sample movies as needed
];

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
      <img src={movie.image} alt={movie.title} className="w-96 h-96 object-cover rounded mb-8" />
      <h1 className="text-4xl text-white font-bold mb-4">{movie.title}</h1>
      <p className="text-gray-400 text-lg mb-8">{movie.description}</p>
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Back to Home
      </Link>
    </div>
  );
}