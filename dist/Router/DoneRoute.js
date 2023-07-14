"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DoneController_1 = require("../Controller/DoneController");
const router = (0, express_1.Router)();
router.route("/")
    .get(DoneController_1.readTask)
    .post(DoneController_1.CreateTask);
router.route("/:id")
    .get(DoneController_1.readOneTask)
    .patch(DoneController_1.UpdateTask)
    .delete(DoneController_1.DeleteTask);
exports.default = router;
