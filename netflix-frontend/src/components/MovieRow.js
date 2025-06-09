import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default function MovieRow({ title, movies }) {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
      <Slider {...sliderSettings}>
        {movies.map((movie, idx) => (
          <div key={movie.id} className="px-2">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 w-full h-60 md:h-72 object-cover bg-gray-800"
                onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/200x300?text=No+Image'; }}
              />
              <h3 className="text-white mt-2 text-base md:text-lg font-semibold text-center">{movie.title}</h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}