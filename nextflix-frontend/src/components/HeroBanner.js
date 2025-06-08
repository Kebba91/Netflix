import React from "react";

export default function HeroBanner() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[600px] w-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('https://assets.nflxext.com/ffe/siteui/vlv3/7e7e6e6e-6e6e-4e4e-8e8e-8e8e8e8e8e8e/7e7e6e6e-6e6e-4e4e-8e8e-8e8e8e8e8e8e_PL-en-20230619-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Unlimited movies,<br />TV shows, and more
        </h1>
        <h2 className="text-2xl md:text-3xl text-white font-semibold mb-4 drop-shadow">
          Starts at 33 zł. Cancel anytime.
        </h2>
        <p className="text-white text-lg mb-6 max-w-2xl drop-shadow">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-2 w-full max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-3 rounded bg-black bg-opacity-60 border border-gray-400 text-white w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded text-lg transition shadow-lg"
          >
            Get Started &gt;
          </button>
        </form>
      </div>
    </section>
  );
}