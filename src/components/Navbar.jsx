import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav_wrapper">
            <Link to="/">Dashboard</Link>
            <Link to="/exercises">exercises</Link>
            <Link to="/foodItems">FoodItems</Link>
            <Link to="/goals">Goals</Link>
        </nav>
    );
};

export default Navbar;
