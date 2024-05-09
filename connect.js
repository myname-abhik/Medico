const mongoose = require("mongoose");

async function connectToMongoDB() {
  const mongoose = require("mongoose");
  require("dotenv").config();
  const PASSWORD = process.env.PASSWORD;
  mongoose
    .connect(
      `mongodb+srv://abhik16chakrabortty:${PASSWORD}@cluster0.iuakazn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
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
