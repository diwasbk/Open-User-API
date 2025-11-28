import express from "express"
import userRouter from "./routes/userRouter.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/user", userRouter)

app.listen(4200, () => {
    console.log("Server is running at the port 4200.")
})
