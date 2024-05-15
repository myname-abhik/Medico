const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");
const cloudinary = require('cloudinary').v2;

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  const Image = "hello"
  let token;
  try {
    const user = await User.create({
      name,
      email,
      password,
      Image,
    });
    token = setUser(user);
  } catch (error) {
    return res.status(500).json({ message: "Failed to create user" });
  }
  
  return res.status(201).json({token});
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  if (user) {
    // const sessionId = uuidv4();
    const token = setUser(user);
    return res.json({token});
  }
}

async function handleUsercart(req, res) {
  const { user_Id, Product_Id, Status } = req.body;
  console.log(user_Id,Product_Id,Status)
  const user = await User.findByIdAndUpdate( { _id: user_Id },
  { $push: { Product_Cart: { Product_Id: `${Product_Id}`, status: `${Status}` } } });
  console.log(user);
  res.send("success");
}
async function upload_pic(req,res){
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

 }



module.exports = {
  handleUserSignup,
  handleUserLogin,
  handleUsercart,
  upload_pic

};
