const express = require('express');
const { addToWatchlist, getWatchlist } = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();
router.post('/watchlist', verifyToken, addToWatchlist);
router.get('/watchlist', verifyToken, getWatchlist);
module.exports = router;