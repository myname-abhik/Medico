const express = require('express');
const service = express.Router();
const {service_doctor,show_service_doctor } = require('../controllers/service');
// service.('/service',(req,res)=>{
//     // res.send(`user/${req.params.id}`);
// })
service.post('/services',service_doctor)
service.get('/services',show_service_doctor)


module.exports = service;