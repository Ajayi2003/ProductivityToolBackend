"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProgressController_1 = require("../Controller/ProgressController");
const router = (0, express_1.Router)();
router.route("/")
    .get(ProgressController_1.readTask)
    .post(ProgressController_1.CreateTask);
router.route("/:id")
    .get(ProgressController_1.readOneTask)
    .patch(ProgressController_1.UpdateTask)
    .delete(ProgressController_1.DeleteTask);
exports.default = router;
