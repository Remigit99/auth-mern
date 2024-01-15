
export const authRoute = (req, res) => {
    console.log(req.body)
    res.status(200).json({ msg: "authRoute is working" })
}