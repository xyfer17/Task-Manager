const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  CreateTasks,
  updateTask,
  deleteTask,
  getTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(CreateTasks);
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;
