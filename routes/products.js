const express = require('express');
const products = express.Router();
products.get('/medicine',(req,res)=>{
    res.send('Hello World');
})
products.post('/medicine',(req,res)=>{
    res.send('Hello World');
})
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