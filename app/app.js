import express from "express"
import userRouter from "./routes/userRouter.js"
import cors from "cors"
import dotenv from "dotenv"

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

app.use("/api/user", userRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running at the port ${PORT}.`)
})
