const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authenticateToken = require('../middleware/jwtauth');
const postsController = require('../controller/postsController');

app.get('/posts',authenticateToken,postsController);
// (req,res,next)=>{
//     res.json({ message: 'Protected route', user: req.user });
//   });

  module.exports = app;
