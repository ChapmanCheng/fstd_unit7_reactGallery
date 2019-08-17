import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

// assets
import { ReactComponent as Logo } from "./assets/magnifier.svg";

export default class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchText: ""
		}
	}

	handleChange = e => {
		this.setState({ searchText: e.target.value }) // * this is async
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSearch(this.state.searchText);
		e.currentTarget.reset()
	}

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<input type="search" name="search" placeholder="Search" onChange={this.handleChange} required />
				<button type="submit" className="search-button">
					<Logo />
					{/* <Redirect to={`/${this.state.searchText}`} /> */}
				</button>
			</form>)
	};
};
