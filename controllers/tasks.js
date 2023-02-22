const getAllTasks = (req, res) => {
  res.send("all items");
};

const CreateTasks = (req, res) => {
  res.send("create items");
};

const getTask = (req, res) => {
  res.json({
    id: req.params.id,
  });
};

const updateTask = (req, res) => {
  res.send("update items");
};

const deleteTask = (req, res) => {
  res.send("delete items");
};

module.exports = { getAllTasks, CreateTasks, getTask, updateTask, deleteTask };
