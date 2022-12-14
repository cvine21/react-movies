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
		<div className="char__content">
			<div className="char__list">
				<ul className="char__grid">{content}</ul>
			</div>
		</div>
	);
}

export default MovieList;
