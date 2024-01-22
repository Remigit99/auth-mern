import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

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

export const signInRoute = async (req, res) => {

    const { email, password } = req.body
    try {
        const validUser = await User.findOne({ email })
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return res.status(401).json({ error: "Wrong Credentials" })
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
        const { password: hashedPassord, ...rest } = validUser._doc
        res.cookie("access_token", token, { httpOnly: true }).status(200).json(rest)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }


}