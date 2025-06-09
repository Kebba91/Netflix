
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Subscribe from './pages/Subscribe';
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Profiles from './pages/Profiles';
import TVShows from './pages/TVShows';
import Games from './pages/Games';
import MyList from './pages/MyList';
import MoviesPage from './pages/MoviesPage';
import NewPopularPage from './pages/NewPopularPage';
import LanguagesPage from './pages/LanguagesPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, []);

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Landing />} />
        <Route
          path="/movie/:id"
          element={isAuthenticated ? <MovieDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/subscribe"
          element={isAuthenticated ? <Subscribe /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles"
          element={isAuthenticated ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/tv-shows"
          element={isAuthenticated ? <TVShows /> : <Navigate to="/login" />}
        />
        <Route
          path="/games"
          element={isAuthenticated ? <Games /> : <Navigate to="/login" />}
        />
        <Route
          path="/my-list"
          element={isAuthenticated ? <MyList /> : <Navigate to="/login" />}
        />
        <Route
          path="/movies"
          element={isAuthenticated ? <MoviesPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/new-popular"
          element={isAuthenticated ? <NewPopularPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/languages"
          element={isAuthenticated ? <LanguagesPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
