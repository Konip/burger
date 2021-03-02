import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
import hamburger from "../../assets/hamburger.svg"


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
                    <NavLink to="/menu" activeClassName="selected">меню</NavLink>
                </div>
                <div className="navbar__link">
                    <NavLink to="/news" activeClassName="selected">новости</NavLink>
                </div>
                <div className="navbar__link">
                    <NavLink to="/vacancies" activeClassName="selected">вакансии</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar