// landing.js
import React, { useState, useEffect } from "react";
import heroImage from "../assets/hero-bg.jpg";
import logo from "../assets/netflix-logo.svg";
import "../styles/landing.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LandingPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=388623c8f0c3d1b5dcb6f4319ca08281"
      );
      const data = await response.json();
      setTrendingMovies(data.results);
    } catch (error) {
      console.error("Failed to fetch trending movies:", error);
    }
  };

  const faqs = [
    { question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more." },
    { question: "How much does Netflix cost?", answer: "Plans range from 33 zł to 60 zł per month. No extra costs, no contracts." },
    { question: "Where can I watch?", answer: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web or on your devices." },
    { question: "How do I cancel?", answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can cancel online anytime." },
    { question: "What can I watch on Netflix?", answer: "You can watch a wide variety of TV shows, movies, documentaries, and more." },
    { question: "Is Netflix good for kids?", answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly content." },
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const scrollLeft = () => {
    document.querySelector(".trending-carousel").scrollBy({ left: -800, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.querySelector(".trending-carousel").scrollBy({ left: 800, behavior: "smooth" });
  };

  const renderEmailForm = () => (
    <>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="email-form" role="form" aria-label="Email signup form">
        <input type="email" placeholder="Email address" aria-label="Email address" />
        <button>Get Started</button>
      </div>
    </>
  );

  return (
    <div className="landing-page">
      {/* HERO SECTION */}
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="overlay"></div>
        <header>
          <img src={logo} alt="Netflix Logo" className="logo" />
          <div className="header-right">
            <select className="language-select" aria-label="Select language">
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
            <button className="sign-in">Sign In</button>
          </div>
        </header>
        <div className="hero-content">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Start at $3.99. Cancel anytime.</p>
          {renderEmailForm()}
        </div>
      </div>

      {/* TRENDING NOW */}
      <section className="trending-now">
  <div className="container">
    <h2>Trending Now</h2>
    <div className="trending-carousel-wrapper">
      <button className="carousel-arrow left" onClick={scrollLeft} aria-label="Scroll left">{"<"}</button>
      <div className="trending-carousel">
        <div className="trending-carousel-inner">
          {trendingMovies.slice(0, 10).map((movie, index) => (
            <div key={movie.id} className="trending-card" title={movie.title}>
              <div className="rank-number">{index + 1}</div>
              <div className="netflix-badge">N</div>
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/300x450?text=No+Image"}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-arrow right" onClick={scrollRight} aria-label="Scroll right">{">"}</button>
    </div>
  </div>
</section>


      {/* REASONS TO JOIN */}
      <section className="section">
        <h2>More Reasons to Join Us</h2>
        <div className="reasons-grid">
          <div className="reason-card"><div className="icon"><i className="fas fa-tv"></i></div><h3>Enjoy on your TV</h3><p>Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p></div>
          <div className="reason-card"><div className="icon"><i className="fas fa-download"></i></div><h3>Download your shows to watch offline</h3><p>Save your favorites easily and always have something to watch.</p></div>
          <div className="reason-card"><div className="icon"><i className="fas fa-globe"></i></div><h3>Watch everywhere</h3><p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p></div>
          <div className="reason-card"><div className="icon"><i className="fas fa-child"></i></div><h3>Create profiles for kids</h3><p>Send kids on adventures with their favorite characters in a space made just for them - free with your membership.</p></div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((item, index) => (
          <div key={index} className={`faq-item ${expandedFAQ === index ? "expanded" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)} aria-expanded={expandedFAQ === index}>
              {item.question}
              <span>{expandedFAQ === index ? "−" : "+"}</span>
            </button>
            <div className="faq-answer"><p>{item.answer}</p></div>
          </div>
        ))}
        <div className="get-started-bottom">{renderEmailForm()}</div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <a href="/">FAQ</a>
            <a href="/">Investor Relations</a>
            <a href="/">Ways to Watch</a>
            <a href="/">Corporate Information</a>
            <a href="/">Legal Notices</a>
          </div>
          <div className="footer-column">
            <a href="/">Help Center</a>
            <a href="/">Jobs</a>
            <a href="/">Terms of Use</a>
            <a href="/">Contact Us</a>
          </div>
          <div className="footer-column">
            <a href="/">Privacy</a>
            <a href="/">Speed Test</a>
            <a href="/">Account</a>
            <a href="/">Redeem Gift Cards</a>
          </div>
          <div className="footer-column">
            <a href="/">Media Center</a>
            <a href="/">Buy Gift Cards</a>
            <a href="/">Cookie Preferences</a>
            <a href="/">Legal Guarantee</a>
          </div>
        </div>
        <div className="footer-lang">
          <select aria-label="Select language">
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <div className="recaptcha-note">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
