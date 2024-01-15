import express from "express"
import { authRoute } from "../Controller/AuthController.js"

const authRouter = express.Router()

authRouter.post("/", authRoute)

export default authRouter;