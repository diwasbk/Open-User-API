import express from "express"
import userRouter from "./routes/userRouter.js"

const app = express()
app.use(express.json())

app.use("/api/user", userRouter)

app.listen(4200, () => {
    console.log("Server is running at the port 4200.")
})
