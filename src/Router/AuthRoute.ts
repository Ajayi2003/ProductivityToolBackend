import {Router} from "express"
import { CreateUser, DeleteUser, SigninUser, UpdateUser, readAllUser, readOneUser } from "../Controller/authController"


const router = Router()

router.route("/users").get(readAllUser)
router.route("/user-info/:id").get(readOneUser)
router.route("/delete/:id").delete(DeleteUser)
router.route("/update/:id").patch(UpdateUser)

// Login User
router.route("/sign-in").post(SigninUser)
router.route("/register").post(CreateUser)




export default router