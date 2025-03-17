const mongoose = require("mongoose");

async function connectToMongoDB() {
  const mongoose = require("mongoose");
  require("dotenv").config();
  // const PASSWORD = dtTA8fYR0bzsKdZj
  mongoose
    .connect(
      // `mongodb+srv://abhik16chakrabortty:D0HsLzUvxx2GFcUu@cluster0.iuakazn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
      `mongodb+srv://Abhik:1213@cluster0.bbxtgyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
  
}

module.exports = {
  connectToMongoDB,
};
