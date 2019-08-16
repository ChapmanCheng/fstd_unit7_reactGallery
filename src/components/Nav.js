import React from "react";

import NavButton from "./NavButton";

const Nav = ({ categories }) => {
    const listOfButtons = categories.map(category => <NavButton name={category} />)
    return (
        <nav className="main-nav">
            <ul>
                {listOfButtons}
            </ul>
        </nav>
    );
};

export default Nav;
