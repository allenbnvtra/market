// db.js or mongoose.js
const mongoose = require("mongoose");
const uri = process.env.MONGOBD_URI; // Replace with your actual MongoDB connection string

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB", error));
