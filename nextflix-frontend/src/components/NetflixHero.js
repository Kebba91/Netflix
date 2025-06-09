// import React from "react";

// const userAvatars = [
//   { id: 1, name: "Alice", img: "https://i.pravatar.cc/50?img=1" },
//   { id: 2, name: "Bob", img: "https://i.pravatar.cc/50?img=2" },
//   { id: 3, name: "Carol", img: "https://i.pravatar.cc/50?img=3" },
// ];

// const genres = ["Action", "Drama", "Comedy", "Thriller", "Sci-Fi", "Romance"];

// const popularTitles = [
//   { id: 1, title: "Stranger Things", cover: "https://via.placeholder.com/150x225?text=Stranger+Things" },
//   { id: 2, title: "The Witcher", cover: "https://via.placeholder.com/150x225?text=The+Witcher" },
//   { id: 3, title: "Squid Game", cover: "https://via.placeholder.com/150x225?text=Squid+Game" },
// ];

// const myList = [
//   { id: 1, title: "Breaking Bad", cover: "https://via.placeholder.com/150x225?text=Breaking+Bad" },
//   { id: 2, title: "Narcos", cover: "https://via.placeholder.com/150x225?text=Narcos" },
//   { id: 3, title: "Ozark", cover: "https://via.placeholder.com/150x225?text=Ozark" },
// ];

// export default function NetflixHero({ featured, backgroundImage }) {
//   return (
//     <div className="netflix-container">
//       <div
//         className="hero-section"
//         style={{
//           backgroundImage: `url(${backgroundImage || '/A_digital_image_for_a_Netflix_homepage_background_.png'})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="hero-overlay" />
//         <div className="hero-content">
//           <h1>{featured?.title || "Featured Show"}</h1>
//           <p>Watch the latest hit series now.</p>
//           <button>Play</button>
//           <button>My List</button>
//         </div>
//       </div>

//       <section className="section">
//         <h2>Popular on Netflix</h2>
//         <div className="scroll-row">
//           {popularTitles.map((item) => (
//             <div key={item.id} className="card">
//               <img src={item.cover} alt={item.title} />
//               <p>{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="section">
//         <h2>My List</h2>
//         <div className="scroll-row">
//           {myList.map((item) => (
//             <div key={item.id} className="card">
//               <img src={item.cover} alt={item.title} />
//               <p>{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="section">
//         <h2>User Avatars</h2>
//         <div className="avatars-row">
//           {userAvatars.map((user) => (
//             <div key={user.id} className="avatar">
//               <img src={user.img} alt={user.name} title={user.name} />
//               <span>{user.name}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="section">
//         <h2>Genres</h2>
//         <div className="genres-row">
//           {genres.map((genre, idx) => (
//             <div key={idx} className="genre">
//               {genre}
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }