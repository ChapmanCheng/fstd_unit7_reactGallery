import React from "react";

import NavButton from "./NavButton";

const Nav = props => {
	return (
		<nav className="main-nav">
			<ul>
				<NavButton name="cats" />
				<NavButton name="dogs" />
				<NavButton name="birds" />
			</ul>
		</nav>
	);
};

export default Nav;
