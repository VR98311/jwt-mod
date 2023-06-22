const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/user');

   const saltRounds = 10;
const registercontroller = require('../controller/registerController');
    app.post('/register',registercontroller);
    // ,(req,res,next)=>{

    //     bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    //         const newUser = new User({
    //             name:req.body.name,
    //             password:hash
    //            });
    //            newUser.save().then((foundUser)=>{
    //               res.send("Succesfully Saved");
    //            }).catch((err)=>{
    //                console.log(err);
    //            });
    // });
    // });

module.exports = app;
