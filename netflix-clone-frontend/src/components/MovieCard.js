import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <div className="w-40 mr-4">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="rounded-md shadow-md w-full h-60 object-cover"
      />
      <h3 className="text-sm mt-1 font-medium">{movie.title}</h3>
      <Link
        to={`/movie/${movie._id}`}
        className="text-blue-500 hover:underline text-xs block mt-1"
      >
        View
      </Link>
    </div>
  );
}