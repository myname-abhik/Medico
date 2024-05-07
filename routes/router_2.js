const express = require('express');
const router_2 = express.Router();

router_2.get('/doctor',(req,res)=>{
    res.send('Doctor');
})

module.exports = router_2;