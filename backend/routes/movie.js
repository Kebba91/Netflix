const express = require('express');
const {
  createMovie,
  getMovies,
  getMovie,
  deleteMovie
} = require('../controllers/movieController');
const verifyToken = require('../middleware/verifyToken');
const verifyAdmin = require('../middleware/verifyAdmin');
const router = express.Router();
router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', verifyAdmin, createMovie);
router.delete('/:id', verifyAdmin, deleteMovie);
module.exports = router;