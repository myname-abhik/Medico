const express = require('express');
const router = express.Router();
router.get('/medicine',(req,res)=>{
    res.send('Hello World');
})
router.post('/medicine',(req,res)=>{
    res.send('Hello World');
})
router.get('/medicine/:id',(req,res)=>{
    const id = req.params.id
    res.send(`Product Id is ${id}`);
})
router.patch('/medicine/:id',(req,res)=>{
    res.send('Hello World');
})
router.delete('/medicine/:id',(req,res)=>{
    res.send('Hello World');
})

module.exports = router;