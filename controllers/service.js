const doctor_available_on = require("../models/doctor_available");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");
const cloudinary = require('cloudinary').v2;

async function service_doctor(req,res){
    const doctor_Image1= req.files.doctor_Image
    const doctor_name1 = req.body.doctor_name
    const doctor_profile1 = req.body.doctor_profile
   const  doctor_id1 = req.body.doctor_id
   const doctor_degree1 = req.body.doctor_degree
   const doctor_address1 = req.body.doctor_address
   const Doctor_available1 = req.body.Doctor_available
    console.log(doctor_Image1, doctor_name1,doctor_profile1,doctor_id1 ,doctor_degree1,doctor_address1 ,Doctor_available1)
    cloudinary.uploader.upload(doctor_Image1.tempFilePath, async (error, result) => {
        console.log(typeof result.secure_url);
        await doctor_available_on.create({
            doctor_name :doctor_name1,
            doctor_profile:doctor_profile1,
            doctor_id :doctor_id1 ,
            doctor_degree:doctor_degree1,
            doctor_address : doctor_address1,
          doctor_Image: result.secure_url,
          Doctor_available : Doctor_available1
        });
      });
      res.json({ message: "File uploaded successfully" });

}
async function show_service_doctor(req, res) {
    await doctor_available_on.find({}).then((Doctors) => {
      
           res.send(Doctors)
        
    });
   
  }

module.exports = {
    service_doctor,
    show_service_doctor
  };