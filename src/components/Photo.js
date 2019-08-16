import React from "react";

const Photo = ({ photo }) => {
	const { owner, farm, server, id, secret, title } = photo;
	return (
		<li>
			<a
				href={`https://www.flickr.com/photos/${owner}/${id}`}
				target="_blank"
			>
				<img
					src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
					alt={title}
				/>
			</a>
		</li>
	);
};

export default Photo;
