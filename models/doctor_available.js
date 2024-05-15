const mongoose = require('mongoose');

const Url_Schema = new mongoose.Schema(
    {
        doctor_Image: {
        type: String,
        required: true,
      },

      doctor_name: {
        type: String,
        required: true,
      },
      doctor_profile: {
        type: String,
        required: true,
      },
      doctor_id: {
        type: String,
        required: true,
      },
      doctor_degree: [
        {
          type: String,
          required: true,
        },
      ],
      doctor_address: {
        type: String,
        required: true,
      },
     Doctor_available: {
        type: Boolean,
        required: true,
       
      },
    },
    { timestamps: true }
  );
  
  // },{timeStamp: true})
  const doctor_available_on = mongoose.model("doctor_available_on", Url_Schema);
  module.exports = doctor_available_on;