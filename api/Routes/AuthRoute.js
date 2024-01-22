import express from "express"
import { authRoute } from "../Controller/AuthController.js"
import { signInRoute } from "../Controller/AuthController.js"

const authRouter = express.Router()

authRouter.post("/", authRoute)
authRouter.post("/", signInRoute)

export default authRouter;