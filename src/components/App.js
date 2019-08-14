import React, {Component} from 'react';

// Styles
import "../styles/styles.css"

// Components
import Form from "./Form"
import Nav from "./Nav"
import PhotoContainer from "./PhotoContainer"

class App extends Component {
	render(){
		return (
			<div className="container">
				<Form />
				<Nav />
				<PhotoContainer />
			</div>
		)
	}
}

export default App;
