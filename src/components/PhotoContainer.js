import React from "react"
import PhotoList from "./PhotoList"
import NotFound from "./NotFound"

const PhotoContainer = props=> {
	return (
		<div className="photo-container">
			<h2>Results</h2>
			<PhotoList />
		</div>
	)
}

export default PhotoContainer