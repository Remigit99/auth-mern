import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

import userRouter from "./Routes/UserRoutes.js"
import authRouter from "./Routes/AuthRoute.js"
import { signInRoute } from "./Controller/AuthController.js"



const app = express()

app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/auth/sign-up", authRouter)
app.use("/api/auth/sign-in", signInRoute)

const PORT = process.env.PORT || 9090

// app.use((error, req, res, next) => {

// })


mongoose.connect(process.env.MONGODB_URI).then(
    app.listen(PORT, () => {
        console.log(`Server running on PORT: ${PORT}`)
    })
).catch(err => console.log(err))



