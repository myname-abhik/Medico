const express = require('express');
const service = express.Router();

service.get('/:id',(req,res)=>{
    res.send(`user/${req.params.id}`);
})

module.exports = service;