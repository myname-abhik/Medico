const mongoose = require('mongoose');

const Url_Schema = new mongoose.Schema(
    {
      Product_Title: {
        type: String,
        required: true,
      },
      Product_description: {
        type: String,
        required: true,
      },
      Product_Image: {
        type: String,
        required: true,
      },
      product_specifications: [
        {
          type: String,
          required: true,
        },
      ],
      product_price: {
        type: String,
        required: true,
      },
      product_Discount: {
        type: String,
        required: true,
      },
  
      Product_available: {
        store_name: {
          type: String,
          required: true,
        },
        store_Id: {
          type: String,
          required: true,
        },
      },
    },
    { timestamps: true }
  );
  
  // },{timeStamp: true})
  const product_Schema = mongoose.model("Product_details", Url_Schema);
  module.exports = product_Schema;