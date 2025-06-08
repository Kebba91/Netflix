const Movie = require('../models/Movie');
exports.createMovie = async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).json(movie);
};
exports.getMovies = async (req, res) => {
  const genre = req.query.genre;
  const filter = genre ? { genre: genre } : {};
  const movies = await Movie.find(filter);
  res.status(200).json(movies);
};
exports.getMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.status(200).json(movie);
};
exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.status(204).send();
};