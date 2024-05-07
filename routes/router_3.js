const express = require('express');
const router_3 = express.Router();

router_3.get('/:id',(req,res)=>{
    res.send(`user/${req.params.id}`);
})

module.exports = router_3;