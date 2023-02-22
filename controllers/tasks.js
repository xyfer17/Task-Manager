const Task = require("../models/Task");

//get task
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//post task
const CreateTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// get single task
const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOne({ _id: id });
    if (!task) {
      return res.status(404).json({ msg: `no task with id: ${id}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  try {
    const id = req.params.id;
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
      return res.status(404).json({ msg: `no task with id: ${id}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, CreateTasks, getTask, updateTask, deleteTask };
