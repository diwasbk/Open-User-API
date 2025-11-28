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
};