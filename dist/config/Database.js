"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionToolDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const STRINGURL = process.env.APPLICATION_DB;
const ProductionToolDB = () => {
    mongoose_1.default.connect(STRINGURL).then(() => {
        console.log("Database Connected");
    });
};
exports.ProductionToolDB = ProductionToolDB;
