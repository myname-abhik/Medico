const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        // required: true,
    },
    phone: {
        type: String,
        
    },

    Product_Cart: [
        { 
            Product_Id: {
            type: String,
            // required: true,
        }, 
        status: {
            type: String,
            // required: true,
        } 
    }
       
      ],
    Image: {
        type: String,
        required: true,
    }
},{timestamps: true})


const User = mongoose.model("user_medico",userSchema)

module.exports = User;