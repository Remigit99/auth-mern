import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <nav>
            <div className="container nav__container">
                <Link to="/home" >
                    <h3>Remi</h3>
                </Link>


                <ul>
                    <Link to="/about">About</Link>
                    <Link to="/sign-in">Sign In</Link>
                    <Link to="/sign-up">Sign Up</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
