import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

import userRouter from "./Routes/UserRoutes.js"



const app = express()

app.use("/api/user", userRouter)

const PORT = process.env.PORT || 9090




mongoose.connect(process.env.MONGODB_URI).then(
    app.listen(PORT, () => {
        console.log(`Server running on PORT: ${PORT}`)
    })
).catch(err => console.log(err))



