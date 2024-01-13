import express from "express"

import { userController } from "../Controller/UserController.js";


const router = express.Router()

/*============ Get User ===========*/
router.get("/", userController)


export default router;