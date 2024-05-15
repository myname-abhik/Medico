const cloudinary = require('cloudinary').v2;

async function connectToCloudinary() {
    cloudinary.config({ 
        cloud_name: 'dfkhg7gkp', 
        api_key: '357518649149878', 
        api_secret: '4mNntvZI9Bb30TBLYr4gt4UANaQ'
    })
    console.log('Connected to cloudinary')
  }

  module.exports = {
    connectToCloudinary
  };