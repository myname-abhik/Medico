const express = require('express');
const User = require("../models/user");
const { handleUserSignup, handleUserLogin , handleUsercart, upload_pic, handleUpdateProfile } = require('../controllers/user');
const user = express.Router();
const cloudinary = require('cloudinary').v2;
// app.use(express.urlencoded({ extended: true }));

// user.get('/signup',(req,res)=>{
//     res.send('Doctor');
// })

user.post("/signup", handleUserSignup);
user.post("/login", handleUserLogin);

 user.post('/upload',upload_pic);
user.post("/addtocart", handleUsercart);

user.post("/dashboard/:id",handleUpdateProfile);


   


module.exports = user;