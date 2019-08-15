// Node modules
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"

// Styles
import "../styles/styles.css"

// Components
import Form from "./Form"
import Nav from "./Nav"
import PhotoContainer from "./PhotoContainer"
import NotFound from "./NotFound"

class App extends Component {

	fetchPhoto() {
		fetch()
	}

	render() {
		return (
			<div className="container">
				<Form />
				<Nav />
				<Switch>

					<Route path="/" component={PhotoContainer} exact />
					<Route path="/cats" render={() => <PhotoContainer />} />
					<Route path="/dogs" render={() => <PhotoContainer />} />
					<Route path="/birds" render={() => <PhotoContainer />} />
					<Route component={NotFound} />

				</Switch>

			</div>
		)
	}
}

export default App;

// TODO: Need to add {Match}