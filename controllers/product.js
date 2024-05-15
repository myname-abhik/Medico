const product_Schema = require("../models/Product_Schema");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");
const cloudinary = require('cloudinary').v2;


async function available(req, res) {
    const file = req.files.photos;
    const product = req.body.Titles;
    const Description = req.body.Description;
    const product_price = req.body.Product_price;
    const product_Disc = req.body.Product_Disc;
    const product_specifications = req.body.specification
    const store_Id = req.body.store_id;
    const store_Name = req.body.store_Name;
    console.log(product, Description);
    // console.log(file)
    cloudinary.uploader.upload(file.tempFilePath, async (error, result) => {
      console.log(typeof result.secure_url);
      await product_Schema.create({
        Product_Title: product,
        Product_description: Description,
        product_price: product_price ,
        product_Discount: product_Disc,
        Product_Image: result.secure_url,
           Product_available: {
          store_name: store_Name,
          store_Id: store_Id
      },
      product_specifications: product_specifications
      });
    });
    res.json({ message: "File uploaded successfully" });
  }

  async function show(req, res) {
    await product_Schema.find({}).then((products) => {
      
           res.send(products)
        
    });
   
  }



module.exports = {
    available,
    show
  };