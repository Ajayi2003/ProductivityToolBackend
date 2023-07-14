"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskRoute_1 = __importDefault(require("./Router/TaskRoute"));
const ProgressRoute_1 = __importDefault(require("./Router/ProgressRoute"));
const DoneRoute_1 = __importDefault(require("./Router/DoneRoute"));
const AuthRoute_1 = __importDefault(require("./Router/AuthRoute"));
const cors_1 = __importDefault(require("cors"));
const appConfig = (app) => {
    // Middleware configuration
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    // route and endpoint
    app.use("/api/task", TaskRoute_1.default);
    // progress route and endpoint
    app.use("/api/progress", ProgressRoute_1.default);
    // Done route and endpoint
    app.use("/api/done", DoneRoute_1.default)
        // Auth route and endpoint
        .use("/api/auth", AuthRoute_1.default);
};
exports.default = appConfig;
