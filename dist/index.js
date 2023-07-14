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
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const Database_1 = require("./config/Database");
dotenv_1.default.config();
//IIFE immediately invoked function expression
const port = parseInt(process.env.APPLICATION_PORT);
const realPort = port;
const app = (0, express_1.default)();
const server = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, app_1.default)(app); //initialize app
        (0, Database_1.ProductionToolDB)(); // initialize db 
        // Server listening
        app.listen(realPort, () => {
            console.log(`Server listening on`, realPort);
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
server();
