import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
import hamburger from "../../assets/hamburger.svg"


function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar__logo">
                <NavLink to="/">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="256.000000pt" height="256.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                            <path d="M1075 2079 c-176 -24 -342 -87 -451 -171 -64 -50 -137 -141 -170
-214 -27 -58 -64 -194 -64 -235 0 -24 -5 -28 -38 -34 -89 -15 -139 -78 -129
-162 6 -53 27 -87 70 -110 30 -17 92 -18 987 -18 937 0 956 0 988 20 19 11 42
37 53 57 48 94 -4 193 -113 213 -33 6 -38 11 -38 35 0 40 -37 176 -64 234 -87
188 -274 318 -536 371 -91 19 -397 28 -495 14z m476 -143 c156 -36 263 -91
346 -179 79 -84 122 -172 138 -282 l7 -45 -755 0 c-470 0 -758 4 -762 10 -9
14 22 135 51 196 33 69 113 157 187 205 69 45 190 87 302 105 103 17 394 11
486 -10z" />
                            <path d="M2105 1094 c-11 -3 -121 -36 -245 -74 -124 -37 -254 -71 -290 -75
-53 -5 -161 8 -582 69 -533 78 -646 88 -699 61 -71 -37 -94 -154 -43 -215 31
-36 73 -60 107 -60 24 0 25 -3 29 -82 7 -127 61 -208 157 -237 53 -15 1419
-16 1476 0 53 15 129 91 144 144 6 22 11 70 11 106 l0 66 42 6 c134 18 175
198 62 268 -35 21 -128 34 -169 23z m-55 -336 c0 -71 -18 -117 -53 -138 -31
-19 -56 -20 -717 -20 -661 0 -686 1 -717 20 -35 21 -53 67 -53 138 l0 42 770
0 770 0 0 -42z" />
                        </g>
                    </svg>

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