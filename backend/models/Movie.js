const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  genre: [String],
  year: Number,
  limit: Number,
  posterUrl: String,
  videoUrl: String
}, { timestamps: true });
module.exports = mongoose.model('Movie', movieSchema);