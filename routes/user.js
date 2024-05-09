const express = require('express');
const { handleUserSignup, handleUserLogin } = require('../controllers/user');
const user = express.Router();

// user.get('/signup',(req,res)=>{
//     res.send('Doctor');
// })

user.post("/signup", handleUserSignup);
user.post("/login", handleUserLogin);

module.exports = user;