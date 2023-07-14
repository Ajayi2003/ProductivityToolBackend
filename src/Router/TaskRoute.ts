import { Router } from "express";
import { CreateTask, DeleteTask, UpdateTask, readOneTask, readTask } from "../Controller/TaskController";


const router = Router()

router.route("/")
.get(readTask)
.post(CreateTask)

router.route("/:id")
.get(readOneTask)
.patch(UpdateTask)
.delete(DeleteTask)

export default router