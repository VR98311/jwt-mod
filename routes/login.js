const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/user');
const loginController = require('../controller/loginController');

app.post('/login',loginController);

    // User.findOne({name:req.body.name}).then((foundUser)=>{    
    //     bcrypt.compare(req.body.password, foundUser.password, function(err, result) {
    //            if(result == true){
    //         const user = {name:foundUser.name,password:foundUser.password};
    //            const accessToken = jwt.sign(user,'secret',{ expiresIn: '30s'});
    //            res.send(accessToken);
    //            }else{
    //             res.send("Failed to log in");
    //            }
    //        })
    //   });
// });

module.exports = app;
