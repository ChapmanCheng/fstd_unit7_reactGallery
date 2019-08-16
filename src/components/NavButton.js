import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ name }) => {
	const capitalizedName = name[0].toUpperCase() + name.slice(1);
	return (
		<li>
			<NavLink to={`/${name}`}>{capitalizedName}</NavLink>
		</li>
	);
};

export default NavButton;
