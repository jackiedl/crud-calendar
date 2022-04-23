import express from "express";

import { getTasks, createTasks } from "../controllers/PostTaskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTasks);

export default router;