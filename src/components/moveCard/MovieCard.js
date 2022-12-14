import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./movieCard.scss";

function MovieCard({ movie }) {
	const { id, title, medium_cover_image } = movie;

	return (
		<Link to={`movie/${id}`} style={{ textDecoration: "none" }}>
			<li className="movie__item">
				<img src={medium_cover_image} alt={title} />
				<div className="movie__name">{title}</div>
			</li>
		</Link>
	);
}

export default MovieCard;
