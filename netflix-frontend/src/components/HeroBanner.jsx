import React from "react";

export default function HeroBanner({ featured }) {
  const backgroundImage = featured?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${featured.backdrop_path}`
    : "https://assets.nflxext.com/ffe/siteui/vlv3/7e7e6e6e-6e6e-4e4e-8e8e-8e8e8e8e8e8e/7e7e6e6e-6e6e-4e4e-8e8e-8e8e8e8e8e8e_PL-en-20230619-popsignuptwoweeks-perspective_alpha_website_large.jpg";

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white text-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85)), url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-xl sm:text-2xl mb-4">Starts at 33 zł. Cancel anytime.</h2>
        <p className="text-lg sm:text-xl mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-2/3 px-5 py-3 bg-black bg-opacity-70 text-white border border-gray-400 rounded focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded"
          >
            Get Started &gt;
          </button>
        </form>
      </div>
    </section>
  );
}
