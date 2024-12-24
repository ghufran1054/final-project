const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/tasksController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, TaskController.getAllTask);
router.post("/create", authMiddleware, TaskController.createTask);
router.delete("/delete/:id", authMiddleware, TaskController.deleteTask);
router.put("/update/:id", authMiddleware, TaskController.updateTask);

module.exports = router;
