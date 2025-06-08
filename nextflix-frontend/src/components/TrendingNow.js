import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TrendingNow() {
  // Use real TMDB poster images
  const trending = [
  {
    title: "Ginny & Georgia",
    img: "https://image.tmdb.org/t/p/w500/2M2JxEv3HSpjnZWjY9NOdGgfUd.jpg",
  },
  {
    title: "Rhythm + Flow",
    img: "https://image.tmdb.org/t/p/w500/6zltP23zLGPogsHZUazSrrwNuKs.jpg",
  },
  {
    title: "Stranger Things",
    img: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  },
  {
    title: "Squid Game",
    img: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    title: "You",
    img: "https://image.tmdb.org/t/p/w500/7bEYwjUvlJW7GerM8GYmqwl4oS3.jpg",
  },
];

  const sliderSettings = {
    dots: false,
    infinite: true,
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
    <div className="max-w-6xl mx-auto mt-8">
      <div className="mt-12 px-4">
        <h2 className="text-2xl text-white font-bold mb-6">Trending Now</h2>
        <Slider {...sliderSettings}>
          {trending.map((show, idx) => (
            <div key={idx} className="px-2">
              <div className="relative group">
                {/* Netflix logo */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                  alt="Netflix"
                  className="absolute top-2 left-2 w-8 h-4 z-20 opacity-90"
                />
                {/* Card number */}
                <span className="absolute -left-4 top-4 text-7xl font-extrabold text-white opacity-90 drop-shadow-lg select-none z-20"
                  style={{ WebkitTextStroke: '2px #111' }}>
                  {idx + 1}
                </span>
                <Link to="#">
                  <img
                    src={show.img}
                    alt={show.title}
                    className="rounded-lg shadow-xl border-2 border-black hover:border-red-600 hover:scale-105 transition-transform duration-200 w-full h-[320px] object-cover bg-gray-900"
                    style={{ aspectRatio: '2/3' }}
                    onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/200x300?text=No+Image'; }}
                  />
                  <h3 className="text-white mt-2 text-base md:text-lg font-semibold text-center">{show.title}</h3>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}