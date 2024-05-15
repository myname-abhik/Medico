const express = require('express');
const User = require("../models/user");
const { handleUserSignup, handleUserLogin } = require('../controllers/user');
const user = express.Router();
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'dfkhg7gkp', 
    api_key: '357518649149878', 
    api_secret: '4mNntvZI9Bb30TBLYr4gt4UANaQ'
});
// app.use(express.urlencoded({ extended: true }));

// user.get('/signup',(req,res)=>{
//     res.send('Doctor');
// })

user.post("/signup", handleUserSignup);
user.post("/login", handleUserLogin);

 user.post('/upload',(req,res)=>{
     const id = req.body.id
     const file = req.files.file
     console.log(id,);
     res.send(id);
     cloudinary.uploader.upload(file.tempFilePath,async(error, result)=>{
        console.log(typeof(result.secure_url))
        User.findOneAndUpdate(
            { name: id }, // Find the user by name
            { $set: { Image: result.secure_url } }, // Update the image field
            { new: true } // Return the updated document
        )
        .then(updatedUser => {
            if (updatedUser) {
                console.log('User image updated:', updatedUser);
            } else {
                console.log('User not found.');
            }
        })
        .catch(error => {
            console.error('Error updating user image:', error);
        });
     })

    });
   


module.exports = user;