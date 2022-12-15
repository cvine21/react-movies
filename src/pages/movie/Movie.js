import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import { fetchMovie } from "../../services/movieService";

import "./movie.scss";

function Movie() {
	const [movie, setMovie] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetchMovie(id).then((data) => {
			setMovie(data);
		});
	}, []);

	const {
		title,
		rating,
		genres,
		year,
		description_full,
		medium_cover_image,
		like_count,
		url,
	} = movie;

	return (
		<>
			<div className="container" id="movie-content">
				<div className="movie__details">
					<div className="movie__poster">
						<img src={medium_cover_image} alt={title} />
						<button className="button button__main button__long">
							<a href={url} target="_blank">
								<div className="inner">WIKI</div>
							</a>
						</button>
					</div>
					<div className="movie__info">
						<h1 className="movie__title">{title}</h1>
						<h2>{`${year}, ${genres?.join(" / ")}`}</h2>
						<div className="movie__likes">
							<i className="fa-solid fa-heart" />
							<span>{like_count}</span>
						</div>
						<div className="movie__rating">
							<i className="fa-brands fa-imdb" />
							<span>{rating}</span>
						</div>
						<p>{description_full || "No description"}</p>
					</div>
				</div>
				<Comments id={id} />
			</div>
		</>
	);
}

export default Movie;
