import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
import hamburger from "../../assets/hamburger.png"


function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar__logo">
                <NavLink to="/">
                    <img src={hamburger} alt="hamberger" />
                </NavLink>
            </div >

            <div className="navbar__links">
                <div className="navbar__link">
                    <NavLink to="/menu">Menu</NavLink>
                </div>
                <div className="navbar__link">
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className="navbar__link">
                    <NavLink to="/music">Music</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar