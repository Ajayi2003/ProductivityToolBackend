"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../Controller/authController");
const router = (0, express_1.Router)();
router.route("/users").get(authController_1.readAllUser);
router.route("/user-info/:id").get(authController_1.readOneUser);
router.route("/delete/:id").delete(authController_1.DeleteUser);
router.route("/update/:id").patch(authController_1.UpdateUser);
// Login User
router.route("/sign-in").post(authController_1.SigninUser);
router.route("/register").post(authController_1.CreateUser);
exports.default = router;
