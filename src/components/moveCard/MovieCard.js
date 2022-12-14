import React from "react";

import "./movieCard.scss";

function MovieCard({ movie }) {
	const { id, title, medium_cover_image } = movie;

	return (
		<li className="char__item" key={id}>
			<img src={medium_cover_image} alt={title} />
			<div className="char__name">{title}</div>
		</li>
	);
}

export default MovieCard;