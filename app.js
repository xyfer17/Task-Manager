const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const tasks = require("./routes/tasks");
const notFound = require("./middlewares/notFound");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

// routes

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/tasks", tasks);
app.use(notFound);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}... `));
  } catch (error) {
    console.log(error);
  }
};

start();
