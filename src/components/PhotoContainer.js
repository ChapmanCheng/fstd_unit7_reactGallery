import React from "react";
import Photo from "./Photo";

const PhotoContainer = ({ photos }) => {
	let listOfPhotos = photos.map(photo => <Photo photo={photo} key={photo.id} />);

	return (
		<div className="photo-container">
			<h2>Results</h2>
			<ul>{listOfPhotos}</ul>
		</div>
	);
};

export default PhotoContainer;
