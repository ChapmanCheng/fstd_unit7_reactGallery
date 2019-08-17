// Node modules
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Styles
import "../styles/styles.css";

// Components
import Form from "./Form";
import Nav from "./Nav";
import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";
import { flickrAPI } from "./keys/config";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			photos: [],
			categories: ["sunset", "waterfalls", "skyline"],
			isLoading: true
		};
	}

	componentDidMount = () => {
		this.fetchPhotos(this.state.categories[0])
	}

	fetchPhotos = searchTerm => {
		const { key } = flickrAPI
		const api = (`https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=24&format=json&nojsoncallback=1&safe_search=1&api_key=${key}&text=${searchTerm}`);

		fetch(api)
			.then(res => res.json())
			.then(res => this.setState({
				photos: res.photos.photo,
				isLoading: false
			}))
			.catch(err => console.error(err));
	}

	changePhotosSet = category => {
		this.setState({
			photos: [],
			isLoading: true
		})
		this.fetchPhotos(category)
	}

	onSearch = searchText => {
		const categories = this.state.categories
		categories.push(searchText)
		this.setState({ categories })
		this.changePhotosSet(searchText)
	}

	render() {
		const { categories, photos, isLoading } = this.state

		// * Returned component
		return (
			<div className="container">
				<Form onSearch={this.onSearch} />
				<Nav categories={categories} changePhotosSet={this.changePhotosSet} />
				<Switch>
					<Route exact path="/" render={() => <Redirect to={`/${categories[0]}`} />} />
					{categories.map((category, i) => <Route key={i} path={`/${category}`} render={() => <PhotoContainer photos={photos} isLoading={isLoading} />} />)}
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}
