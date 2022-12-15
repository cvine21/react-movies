import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import { fetchMovie, selectMovie } from "../../redux/singleMovieSlice";

import "./movie.scss";

function Movie() {
	const { item, status } = useSelector(selectMovie);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchMovie(id));
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
	} = item;

	const content = (
		<div className="movie__details">
			<div className="movie__poster">
				<img src={medium_cover_image} alt={title} />
				<button className="button button__main button__long">
					<a href={url} target="_blank" rel="noreferrer">
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
	);

	return (
		<>
			<div className="container" id="movie-content">
				{(status === "loading" && <span className="loader"></span>) ||
					content}
				<Comments id={id} />
			</div>
		</>
	);
}

export default Movie;
