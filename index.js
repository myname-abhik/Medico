const express  = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const router  = require("./routes/router");
const router_2 = require("./routes/router_2");

const router_3 = require("./routes/router_3");

app.listen(8000,()=>{
    console.log('This is listen on localhost:8000')
})
app.use('/api/v1/products',router);
app.use('/api/v1/service',router_2);
app.use('/api/v1/user',router_3);

