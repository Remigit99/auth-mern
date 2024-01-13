import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()


mongoose.connect(process.env.MONGODB_URI).then(
    app.listen(8988, console.log("Server running on port 3031"))
).catch(err => console.log(err))



