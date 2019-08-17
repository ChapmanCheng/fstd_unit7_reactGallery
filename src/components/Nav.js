import React from "react";
import { NavLink } from 'react-router-dom'


const Nav = ({ categories }) => {
    // * Generate list array
    const listOfNav = categories.map((category, i) => {
        const capitalizedName = category[0].toUpperCase() + category.slice(1);
        const navLink = <li key={i}><NavLink to={`/${category}`}>{capitalizedName}</NavLink></li>
        return navLink
    })

    // * Render
    return (
        <nav className="main-nav">
            <ul>
                {listOfNav}
            </ul>
        </nav>
    );
};

export default Nav;
