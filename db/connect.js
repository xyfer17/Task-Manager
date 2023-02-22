const mongoose = require("mongoose");

//fix the  db

const connectDB = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url);
};

module.exports = connectDB;
