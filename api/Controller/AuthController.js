import bcryptjs from "bcryptjs"


import User from "../Model/UserSchema.js"



export const authRoute = async (req, res) => {
    const { username, email, password } = req.body
    const hashedPassord = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassord })
    try {
        await newUser.save()
        res.status(201).json({ "message": "User Signed Up" })
    } catch (error) {
        res.status(500).json({ "error": error.message })
    }


}