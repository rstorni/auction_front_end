import React from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";

function Navbar() {
    return (
        <nav className="defaultNav">
            <h1>
                <Link to="/">Storni's</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/Profile">Profile</Link>
                </li>
                <li>
                    <Link to="/Register">Register</Link>
                </li>
                <li>
                    <Link to="/SignIn">Sign In</Link>
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