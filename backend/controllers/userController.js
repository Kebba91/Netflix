const User = require('../models/User');
exports.addToWatchlist = async (req, res) => {
  const user = await User.findById(req.user.id);
  user.watchlist.push(req.body.movieId);
  await user.save();
  res.status(200).json({ message: 'Movie added to watchlist' });
};
exports.getWatchlist = async (req, res) => {
  const user = await User.findById(req.user.id).populate('watchlist');
  res.status(200).json(user.watchlist);
};