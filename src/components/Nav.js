import React from "react";

import NavButton from "./NavButton";

const Nav = ({ categories }) => {
    const listOfButtons = categories.map((category, i) => <NavButton name={category} key={i} />)
    return (
        <nav className="main-nav">
            <ul>
                {listOfButtons}
            </ul>
        </nav>
    );
};

export default Nav;
