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

    // Post New User
    postNewUser = (req, res) => {
        try {
            const existingUser = users.find((user) => {
                return user.id == req.body.id
            })
            if (existingUser) {
                return res.status(400).send({
                    message: "User already exist",
                    success: false
                })
            }
            const newUser = {
                id: req.body.id,
                username: req.body.username,
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
                address: req.body.address
            }
            users.push(newUser)
            res.status(201).send({
                message: `Welcome ${req.body.name}`,
                result: newUser,
                success: true
            })
        } catch (err) {
            res.send({
                message: err.message ?? "Unknown error",
                success: false
            })
        }
    }

    // Update User by Id
    updateUserById = (req, res) => {
        const userExist = users.find((user) => {
            return user.id == req.params.id
        })
        if (!userExist) {
            return res.status(404).send({
                message: "User not found",
                success: false
            })
        }
        // Update all fields coming from req.body
        Object.assign(userExist, req.body)
        res.status(200).send({
            message: `User ${userExist.name} updated successfully`,
            result: userExist,
            success: true
        })
    }

    // Delete User by Id
    deleteUserById = (req, res) => {
        const existingUser = users.find((user) => {
            return user.id == req.params.id
        })
        if (!existingUser) {
            return res.status(404).send({
                message: "User not found",
                success: false
            })
        }
        const userIndex = users.findIndex((user) => {
            return user.id == req.params.id
        })
        users.splice(userIndex, 1)
        res.status(200).send({
            status: 200,
            message: `User ${existingUser.name} deleted successfully`,
            success: true
        })
    }
};