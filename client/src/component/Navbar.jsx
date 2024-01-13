import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <nav className=" bg-slate-100 text-black py-4">
            <div className="container nav__container flex justify-between align-middle ">
                <Link to="/" >
                    <h3 className="text-3xl">Remi</h3>
                </Link>


                <ul className="flex justify-between gap-8 ">
                    <Link to="/about" className="text-2xl">About</Link>
                    <Link to="/sign-in" className="text-2xl">Sign In</Link>
                    <Link to="/sign-up" className="text-2xl">Sign Up</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
