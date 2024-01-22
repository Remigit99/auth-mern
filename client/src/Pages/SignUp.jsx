
import { useState } from "react"
import { Link } from "react-router-dom"


const SignUp = () => {

    // const [isLoading, SetIsLoading] = useState(true)
    // const [error, SetError] = useState(false)

    const [formData, SetFormData] = useState({})

    const handleChange = (e) => {
        SetFormData({
            ...formData, [e.target.id]: e.target.value
        })
    }
    // console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("api/auth/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
        SetFormData({})
    }

    return (

        <main className="w-[600px] mx-auto my-8 text-center">
            <h1 className="text-3xl mt-6">Sign Up</h1>

            <div className="sign__in my-12">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" id="username" placeholder="Username" autoComplete="off" className="bg-slate-100 w-full p-2 outline-none rounded-[0.5rem] mb-8"
                        onChange={handleChange} />

                    <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" className="bg-slate-100 w-full p-2 outline-none rounded-[0.5rem]" onChange={handleChange} />
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="off" className="bg-slate-100 w-full p-2 outline-none my-8 rounded-[0.5rem]" onChange={handleChange} />

                    <button className="flex justify-center align-center text-white bg-purple-800 w-full py-2 rounded-[0.5rem]">SIGN UP</button>

                    {/* <button className="text-center my-4 text-white bg-red-800 w-full py-2 rounded-[0.5rem] hover:opacity-0.5">CONTINUE WITH GOOGLE</button> */}

                    <div>

                        <p>Have an account? <button className=" text-purple-600"><Link to="/sign-up" />Sign In</button></p>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default SignUp