import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav_wrapper">
            <Link to="/" className="nav_links">
                Dashboard
            </Link>
            <Link to="/exercises" className="nav_links">
                exercises
            </Link>
            <Link to="/foodItems" className="nav_links">
                FoodItems
            </Link>
            <Link to="/goals" className="nav_links">
                Goals
            </Link>
        </nav>
    );
};

export default Navbar;
