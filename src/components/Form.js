import React from "react";

// assets
import { ReactComponent as Logo } from "./assets/magnifier.svg";

const Form = ({ handleSubmit }) => {
	return (
		<form className="search-form" onSubmit={handleSubmit}>
			<input type="search" name="search" placeholder="Search" required />
			<button type="submit" className="search-button">
				<Logo />
			</button>
		</form>
	);
};

export default Form;
