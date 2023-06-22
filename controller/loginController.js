const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/user');

const loginController = (req, res, next) => {
  User.findOne({ name: req.body.name }).then((foundUser) => {
    bcrypt.compare(req.body.password, foundUser.password, function (err, result) {
      if (result == true) {
        const user = { name: foundUser.name, password: foundUser.password };
        const accessToken = jwt.sign(user, 'secret', { expiresIn: '30s' });
        res.send(accessToken);
      } else {
        res.send('Failed to log in');
      }
    });
  });
};

module.exports = loginController;
