const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://xyfer17:naveen12@atlascluster.8uxfwos.mongodb.net/task-manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url);
};

module.exports = connectDB;
