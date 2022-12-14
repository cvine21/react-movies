import React, { useEffect, useState } from "react";

import { fetchMovieList } from "../../services/movieService";
import MovieCard from "../moveCard/MovieCard";

import "./movieList.scss";

function MovieList() {
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		fetchMovieList().then((data) => {
			setMovieList(data);
		});
	}, []);

	const content = movieList.map((item) => <MovieCard movie={item} />);

	return (
		<div className="movie__list">
			<ul className="movie__flex">{content}</ul>
			<button className="button button__main button__long">
				<div className="inner">load more</div>
			</button>
		</div>
	);
}

export default MovieList;
