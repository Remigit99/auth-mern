import { Link } from "react-router-dom"

const SignIn = () => {

    return (
        <main className="w-[600px] mx-auto my-8 text-center">
            <h1 className="text-3xl mt-6">Sign In</h1>

            <div className="sign__in my-12">
                <form>
                    <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" className="bg-slate-100 w-full p-2 outline-none" />
                    <input type="password" name="password" id="password" placeholder="Password" autoComplete="off" className="bg-slate-100 w-full p-2 outline-none my-8" />

                    <button className="flex justify-center align-center text-white bg-purple-800 w-full py-2">SIGN IN</button>
                    <button className="text-center my-4 text-white bg-red-800 w-full py-2">CONTINUE WITH GOOGLE</button>

                    <div>

                        <p>Don&apos;t have an account? <button className="sign__up-p text-purple-600"><Link to="/sign-up" />Sign Up</button></p>
                    </div>
                </form>
            </div>





        </main>
    )

}


export default SignIn;