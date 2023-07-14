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
exports.SigninUser = exports.CreateUser = exports.DeleteUser = exports.UpdateUser = exports.readOneUser = exports.readAllUser = void 0;
const authModel_1 = __importDefault(require("../model/authModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const readAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const User = yield authModel_1.default.find();
        return res.status(200).json({
            message: "List of Users",
            data: User
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "User not found",
            data: error.message
        });
    }
});
exports.readAllUser = readAllUser;
const readOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const OneUser = yield authModel_1.default.findById(id);
        return res.status(200).json({
            message: "One User gotten",
            data: OneUser
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Can't read user",
            data: error.message
        });
    }
});
exports.readOneUser = readOneUser;
const UpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, avatar } = req.body;
        const Update = yield authModel_1.default.findByIdAndUpdate(req.params.id, { userName, avatar }, { new: true });
        return res.status(201).json({
            message: "User updated successfully",
            data: Update
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "User not Updated check your Id",
            data: error.message
        });
    }
});
exports.UpdateUser = UpdateUser;
const DeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield authModel_1.default.findByIdAndDelete(id);
        return res.status(201).json({
            message: "User deleted successfully",
            data: deleted
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "User not Deleted check your Id",
            data: error.message
        });
    }
});
exports.DeleteUser = DeleteUser;
const CreateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, avatar, email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const User = yield authModel_1.default.create({
            userName,
            password: hash,
            avatar,
            email
        });
        return res.status(201).json({
            message: 'User created',
            data: User
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Can't Create User",
            data: error.message
        });
    }
});
exports.CreateUser = CreateUser;
const SigninUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield authModel_1.default.findOne({ email });
        if (user) {
            const compare = yield bcrypt_1.default.compare(password, user.password);
            if (compare) {
                return res.status(201).json({ message: `Welcome Back ${user.userName}`,
                    data: user._id
                });
            }
            else {
                return res.status(404).json({ message: "Incorrect Password" });
            }
        }
        else {
            return res.status(404).json({ message: "Please enter a correct email" });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Can't Signin User",
            data: error.message
        });
    }
});
exports.SigninUser = SigninUser;
