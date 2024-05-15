const express = require('express');
const products = express.Router();
const {available,show} = require('../controllers/product');


products.get('/medicine',show)
products.post('/medicine',available)
products.get('/medicine/:id',(req,res)=>{
    const id = req.params.id
    res.send(`Product Id is ${id}`);
})
products.patch('/medicine/:id',(req,res)=>{
    res.send('Hello World');
})
products.delete('/medicine/:id',(req,res)=>{
    res.send('Hello World');
})

module.exports = products;