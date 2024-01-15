import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="flex justify-center align-center bg-slate-100 text-black py-4 mx-auto">
            <div className="container nav__container flex justify-between align-center ">
                <Link to="/" >
                    <h3 className="text-3xl">Remi</h3>
                </Link>


                <ul className="flex justify-between gap-8 ">
                    <Link to="/about" className="text-xl text-bold hover:text-red-600 ">About</Link>
                    <Link to="/sign-in" className="text-xl hover:text-red-600">Sign In</Link>
                    <Link to="/sign-up" className="text-xl hover:text-red-600">Sign Up</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
