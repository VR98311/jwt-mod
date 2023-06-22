const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/jwtauth');

const postsController = (req, res, next) => {
  res.json({ message: 'Protected route', user: req.user });
};

module.exports = postsController;