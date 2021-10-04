// Header Component
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className="navbar">
            <div className="logo">
                {/* Logo Link to Home */}
                <Link to="./home">
                    <img src="./logo.png" alt="" />
                </Link>
            </div>
            {/* Navigation Bar/ Menu */}
            <div className="navbar-items">
                <NavLink className="item text-decoration-none p-3 text-light fw-bold" to="/home">Home</NavLink>
                <NavLink className="item text-decoration-none p-3 text-light fw-bold" to="/services">Services</NavLink>
                <NavLink className="item text-decoration-none p-3 text-light fw-bold" to="/about">About Us</NavLink>
                <NavLink className="item text-decoration-none p-3 text-light fw-bold" to="/contact">Contact Us</NavLink>
            </div>
        </div>
    );
};

export default Header;