"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskController_1 = require("../Controller/TaskController");
const router = (0, express_1.Router)();
router.route("/")
    .get(TaskController_1.readTask)
    .post(TaskController_1.CreateTask);
router.route("/:id")
    .get(TaskController_1.readOneTask)
    .patch(TaskController_1.UpdateTask)
    .delete(TaskController_1.DeleteTask);
exports.default = router;
