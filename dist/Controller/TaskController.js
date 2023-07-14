"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTask = exports.DeleteTask = exports.CreateTask = exports.readOneTask = exports.readTask = void 0;
const TaskModel_1 = __importDefault(require("../model/TaskModel"));
const readTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield TaskModel_1.default.find();
        return res.status(200).json({
            message: "List of Task",
            data: task
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Tasks not found"
        });
    }
});
exports.readTask = readTask;
const readOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const task = yield TaskModel_1.default.findById(id);
        return res.status(200).json({
            message: "Task gotten",
            data: task
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Tasks not found"
        });
    }
});
exports.readOneTask = readOneTask;
const CreateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority, image } = req.body;
        const create = yield TaskModel_1.default.create({
            task,
            priority,
            isCompleted: false,
            image
        });
        return res.status(201).json({
            message: "Task created successfully",
            data: create
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Tasks not found"
        });
    }
});
exports.CreateTask = CreateTask;
const DeleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const remove = yield TaskModel_1.default.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Sucessfully removed",
            data: remove
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Can't delete task"
        });
    }
});
exports.DeleteTask = DeleteTask;
const UpdateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const update = yield TaskModel_1.default.findByIdAndUpdate(req.params.id, { isCompleted: true }, { new: true });
        return res.status(201).json({
            message: "Updated Successfully",
            data: update
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Can't Update Task"
        });
    }
});
exports.UpdateTask = UpdateTask;
