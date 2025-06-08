import HeroBanner from '../components/HeroBanner';
import TrendingNow from '../components/TrendingNow';
import { movies } from './data/movies';

export default function Home() {
  const featured = movies[0];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Banner */}
      <HeroBanner featured={featured} />

      {/* Trending Now Row */}
      <TrendingNow movies={movies} />

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
      <div className="mt-16 px-2 md:px-0 max-w-3xl mx-auto">
        <h2 className="text-lg md:text-xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <div className="bg-[#222] rounded-none shadow-none">
          <details open className="border-b border-[#333] group">
            <summary className="cursor-pointer font-semibold text-lg md:text-xl flex items-center justify-between px-6 py-5 text-white bg-[#333]">
              <span>What is Netflix?</span>
              <span className="ml-2 text-white text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-5 pt-1 text-gray-100 text-lg">
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br /><br />
              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There’s always something new to discover and new TV shows and movies are added every week!
            </div>
          </details>
          <details className="border-b border-[#333] group">
            <summary className="cursor-pointer font-semibold text-lg md:text-xl flex items-center justify-between px-6 py-5 text-white bg-[#333]">
              <span>How much does Netflix cost?</span>
              <span className="ml-2 text-white text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-5 pt-1 text-gray-100 text-lg">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $X.XX to $X.XX a month. No extra costs, no contracts.
            </div>
          </details>
          <details className="border-b border-[#333] group">
            <summary className="cursor-pointer font-semibold text-lg md:text-xl flex items-center justify-between px-6 py-5 text-white bg-[#333]">
              <span>Where can I watch?</span>
              <span className="ml-2 text-white text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-5 pt-1 text-gray-100 text-lg">
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, such as smart TVs, smartphones, tablets, streaming media players, and game consoles.
            </div>
          </details>
          <details className="border-b border-[#333] group">
            <summary className="cursor-pointer font-semibold text-lg md:text-xl flex items-center justify-between px-6 py-5 text-white bg-[#333]">
              <span>How do I cancel?</span>
              <span className="ml-2 text-white text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-5 pt-1 text-gray-100 text-lg">
              Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
            </div>
          </details>
          <details className="border-b border-[#333] group">
            <summary className="cursor-pointer font-semibold text-lg md:text-xl flex items-center justify-between px-6 py-5 text-white bg-[#333]">
              <span>What can I watch on Netflix?</span>
              <span className="ml-2 text-white text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-5 pt-1 text-gray-100 text-lg">
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </div>
          </details>
          <details className="group">
            <summary className="cursor-pointer font-semibold text-lg md:text-xl flex items-center justify-between px-6 py-5 text-white bg-[#333]">
              <span>Is Netflix good for kids?</span>
              <span className="ml-2 text-white text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-5 pt-1 text-gray-100 text-lg">
              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls so you can restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}