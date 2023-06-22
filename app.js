const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const saltRounds = 10;

mongoose.connect('mongodb+srv://vikyathrao-admin:test123@cluster0.vhdacwg.mongodb.net/UserDB');


const login = require("./routes/login.js");
const posts = require("./routes/posts.js");
const register = require("./routes/register.js");

const User = require("./model/user.js");

// const userSchema = new mongoose.Schema({
//    name:String,
//    password:String
// });

// const User = new mongoose.model('User',userSchema);

// app.post('/login',(req,res)=>{
//     User.findOne({name:req.body.name}).then((foundUser)=>{    
//         bcrypt.compare(req.body.password, foundUser.password, function(err, result) {
//                if(result == true){
//             const user = {name:foundUser.name,password:foundUser.password};
//                const accessToken = jwt.sign(user,'secret',{'expiresIn':'30s'});
//                res.send(accessToken);
//                }else{
//                 res.send("Failed to log in");
//                }
//            })
//       });
// });

// app.post('/register',(req,res)=>{

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

app.use('/',login)
app.use('/',register)
app.use('/',posts)

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)
  
//     jwt.verify(token, 'secret', (err, user) => {
//       console.log(err)
//       if (err) return res.sendStatus(403)
//       req.user = user
//       next()
//     })
//   }

  // app.get('/posts',authenticateToken,(req,res)=>{
  //   res.json({ message: 'Protected route', user: req.user });
  // });

app.listen(3000,(req,res)=>{
   console.log('Connected to port 3000');
});


