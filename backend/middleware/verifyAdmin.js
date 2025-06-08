const verifyToken = require('./verifyToken');
module.exports = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: 'Admins only' });
    }
  });
};