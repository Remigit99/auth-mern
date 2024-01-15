import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

import userRouter from "./Routes/UserRoutes.js"
import authRouter from "./Routes/AuthRoute.js"



const app = express()

app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/auth/sign-up", authRouter)

const PORT = process.env.PORT || 9090




mongoose.connect(process.env.MONGODB_URI).then(
    app.listen(PORT, () => {
        console.log(`Server running on PORT: ${PORT}`)
    })
).catch(err => console.log(err))



