const express  = require('express');
const app = express();
const cors = require('cors'); 
const cookieParser = require('cookie-parser');
const fileUpload  =require('express-fileupload')
app.use(fileUpload({
    useTempFiles: true,
    
}))
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:false}));



// Routes import
const products = require('./routes/products');
const service = require('./routes/service');
const user = require('./routes/user');

// MongoDB connection
const { connectToMongoDB } = require('./connect');
connectToMongoDB();

// Cloudinary connection
const {connectToCloudinary} = require('./cloudinaryconnect')
connectToCloudinary();




app.listen(8000,()=>{
    console.log('This is listen on localhost:8000')
})

// Routes
app.use('/api/v1/products',products);
app.use('/api/v1/service',service);
app.use('/api/v1/user',user);

