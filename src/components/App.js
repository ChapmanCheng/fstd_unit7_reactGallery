// Node modules
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Styles
import "../styles/styles.css";

// Components
import Form from "./Form";
import Nav from "./Nav";
import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";
import { flickrAPI } from "./key/config";

class App extends Component {
	constructor() {
		super();
		this.state = {
			cats: [],
			dogs: [],
			birds: []
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

	fetchPhotos(searchTerm) {
		fetch(
			`https://www.flickr.com/services/rest/?method=flickr.photos.search
			&per_page=24
			&format=json
			&nojsoncallback=1
			&api_key=${flickrAPI.key}
			&text=${searchTerm}`
		)
			.then(res => res.json())
			.then(res => this.setState({ [searchTerm]: res.photos.photo }))
			.catch(err => console.error(err));
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(e.target.value);
	}
	handleChange(e) {
		console.log(e);
	}

	render() {
		return (
			<div className="container">
				<Form handleSubmit={this.handleSubmit} />
				<Nav />
				<Switch>
					<Route path="/" component={PhotoContainer} exact />
					<Route
						path="/cats"
						render={() => (
							<PhotoContainer photos={this.state.cats} />
						)}
					/>
					<Route
						path="/dogs"
						render={() => (
							<PhotoContainer photos={this.state.dogs} />
						)}
					/>
					<Route
						path="/birds"
						render={() => (
							<PhotoContainer photos={this.state.birds} />
						)}
					/>
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default App;

// TODO: Need to add {Match}
