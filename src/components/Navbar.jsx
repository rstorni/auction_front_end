import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import UserContext from "../UserContext";
import "../css/navbar.css";

function Navbar() {
    const [user, setUser] = useContext(UserContext)

    return (
        <nav className="defaultNav">
            <h1>
                <Link to="/">Storni's</Link>
            </h1>
            <h3> Welcome {user && user.username ? user.username : "Anonymous"} </h3>
            <ul>
                <li>
                   {user && <Link to="/Profile">Profile</Link>}
                </li>
                <li>
                    {!user && <Link to="/Register">Register</Link>}
                </li>
                <li >
                    {!user && <Link to="/SignIn">Sign In</Link>}
                </li>
                <li>
                    <Link to="/Auctions">Auctions</Link>
                </li>
                <li>
                    <Link to="/Artworks">Artworks</Link>
                </li>
                <li>
                    <Link to="/AboutUs">About Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar