import React, { useCallback, useEffect, useRef, useState } from "react";

import { fetchMovieList } from "../../services/movieService";
import MovieCard from "../moveCard/MovieCard";

import "./movieList.scss";

function MovieList() {
	const [movieList, setMovieList] = useState([]);
	const page = useRef(1);

	useEffect(() => {
		getMovies();
	}, []);

	const getMovies = useCallback((page = 1) => {
		fetchMovieList(page).then((data) => {
			setMovieList((state) => [...state, ...data]);
		});
	}, []);

	const content = movieList.map((item, i) => (
		<MovieCard key={i} movie={item} />
	));

	return (
		<div className="movie__list">
			<ul className="movie__flex">{content}</ul>
			<button
				className="button button__main button__long"
				onClick={() => {
					page.current++;
					getMovies(page.current);
				}}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	);
}

export default MovieList;
