import users from "../models/userModel.js"

export class UserController {
    // Get All Users
    getAllUsers = (req, res) => {
        try {
            res.status(200).send({
                message: "All Users",
                result: users,
                success: true
            })
        } catch (err) {
            res.send({
                message: err.message ?? "Unknown error",
                success: false
            })
        }
    }

    // Get User by Id
    getUserById = (req, res) => {
        try {
            const existingUser = users.find((user) => {
                return user.id == req.params.id
            })
            if (!existingUser) {
                return res.status(404).send({
                    message: "User not found",
                    success: false
                })
            }
            res.status(200).send({
                message: `Welcome ${existingUser.name}`,
                result: existingUser,
                success: true
            })
        } catch (err) {
            res.send({
                message: err.message ?? "Unknown error",
                success: false
            })
        }
    }
};