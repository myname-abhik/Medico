const User = require("../models/user");
const product_Schema = require("../models/Product_Schema");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");
const cloudinary = require('cloudinary').v2;



async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  let Image = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";
  let token;
  // console.log(name,email,password,Image);
  
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
  // console.log(user_Id,Product_Id,Status)
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

 async function handleUsercart_user(req, res) {
  const  user_Id  = req.params.id;
  console.log(user_Id)
  
  const result = await User.findOne({  _id: user_Id });    
  if (result && result.Product_Cart) {
      const productIds = result.Product_Cart.map(item => item.Product_Id);
      // res.send(productIds);
      const product = await product_Schema.find({ _id: { $in: productIds.map(id => id) } })
      res.send(product);
  }
  
  
  
}
async function handleUpdateProfile(req, res) {
  const id = req.params.id;
  const { name, email, password, address,phone } = req.body;
  let Image = req.files.file;
  let Image_;
  let token;
  // console.log(req.body,Image)
  // console.log(id);
  try {
    // let Image;
    
    
    if (Image) {
      const result = await cloudinary.uploader.upload(Image.tempFilePath,(err,result)=>{
        // console.log(result.secure_url);
      });
      Image_ = result.secure_url;
    }
    const user = await User.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          email,
          password,
          address,
          phone,
          Image: Image_,
        },
      },
      { new: true,multi:true}
    );
    token = setUser(user);
  } catch (error) {
    // console.log(error);
    
    return res.status(500).json({ message: 'Failed to update user' });
  }

  return res.status(201).json({ token });
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
  handleUsercart,
  upload_pic,
  handleUpdateProfile,
handleUsercart_user
};
