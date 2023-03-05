const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const cors = require("cors");

const tasks = require("./routes/tasks");
const notFound = require("./middlewares/notFound");
const errorHandlerMiddleware = require("./middlewares/error-handler");
require("dotenv").config();

//middleware
app.use(
  cors({
    origin: ["https://task-manager-27dc2.web.app"],
    methods: ["GET", "POST","DELETE","PATCH"],
    credentials: true,
  })
);

app.use(express.static("./public"));

app.use(express.json());

// routes

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}... `));
  } catch (error) {
    console.log(error);
  }
};

start();
