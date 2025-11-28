import express from "express"
import { UserController } from "../controllers/userController.js"

const userRouter = express.Router()

const userController = new UserController

userRouter.get("/", userController.getAllUsers)
userRouter.get('/:id', userController.getUserById)
userRouter.post("/post", userController.postNewUser)
userRouter.put("/update/:id", userController.updateUserById)
userRouter.delete("/delete/:id", userController.deleteUserById)

export default userRouter
