import express from "express";

import { getTasks, createTasks, updateTask, deleteTask } from "../controllers/PostTaskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTasks);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;