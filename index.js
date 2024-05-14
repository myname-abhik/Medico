const express  = require('express');
const app = express();
const cors = require('cors'); 
const cookieParser = require('cookie-parser');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())



// Routes import
const products = require('./routes/products');
const service = require('./routes/service');
const user = require('./routes/user');

// MongoDB connection
const { connectToMongoDB } = require('./connect');
connectToMongoDB();




app.listen(8000,()=>{
    console.log('This is listen on localhost:8000')
})

// Routes
app.use('/api/v1/products',products);
app.use('/api/v1/service',service);
app.use('/api/v1/user',user);

