import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Subscribe from './pages/Subscribe'; // Make sure this matches your file name
import MovieDetails from './pages/MovieDetails';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';

function App() {
  const isAuthenticated = true; // Force authenticated for now;

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
