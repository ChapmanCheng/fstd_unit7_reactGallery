import React, { Component } from "react";
import Redirect from 'react-router-dom'

// assets
import { ReactComponent as Logo } from "./assets/magnifier.svg";

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchText: ""
		}
	}


	handleSubmit = (e) => {
		e.preventDefault();
		const searchText = e.currentTarget.firstElementChild.value
		this.setState({ searchText }) // ! this is async
		this.props.onSearch(searchText); // ! this script runs too fast and sent empty string to "onSearch()", so I use input.value instead
		e.currentTarget.firstElementChild.value = ""

		// TODO: Redirect to new page
		
	}

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<input type="search" name="search" placeholder="Search" required />
				<button type="submit" className="search-button">
					<Logo />
				</button>
			</form>)
	};
};

export default Form;
