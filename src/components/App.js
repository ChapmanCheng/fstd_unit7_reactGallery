// Node modules
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Styles
import "../styles/styles.css";

// Components
import Form from "./Form";
import Nav from "./Nav";
import PhotoContainer from "./PhotoContainer";
import notFound404 from "./notFound404";
import { flickrAPI } from "./keys/config";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			sunsets: {
				set: [],
				loading: true
			},
			waterfalls: {
				set: [],
				loading: true
			},
			skyline: {
				set: [],
				loading: true
			}
		};
	}

	componentDidMount() {
		for (let key in this.state) {
			this.fetchPhotos(key);
		}
	}

	componentWillUnmount() {
		for (const key in this.state) {
			this.setState({ [key]: [] });
		}
	}

	fetchPhotos = searchTerm => {
		const { key } = flickrAPI
		const api = (`https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=24&format=json&nojsoncallback=1&safe_search=1&api_key=${key}&text=${searchTerm}`);

		fetch(api)
			.then(res => res.json())
			.then(res => this.setState({
				[searchTerm]: {
					set: res.photos.photo,
					loading: false
				}
			}))
			.catch(err => console.error(err));
	}


	render() {
		// * Iteration
		const arrayOfStateKeys = Object.keys(this.state)
		const listOfButtons = arrayOfStateKeys.map((key, i) => <Route
			path={`/${key}`}
			key={i}
			render={routeProps => <PhotoContainer photos={this.state[key]} {...routeProps} />}
		/>)

		// * Returned component
		return (
			<div className="container">
				<Form onSearch={this.fetchPhotos} />
				<Nav categories={arrayOfStateKeys} />
				<Switch>
					{/* the "/" path takes to the first state category */}
					<Route exact path="/" render={() => <Redirect to={`/${arrayOfStateKeys[0]}`} />} />
					{listOfButtons}
					<Route component={notFound404} />
				</Switch>
			</div>
		);
	}
}
