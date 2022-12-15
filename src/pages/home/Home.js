import React, { useCallback, useEffect, useRef, useState } from "react";
import MovieCard from "../../components/moveCard/MovieCard";

import { fetchMovieList } from "../../services/movieService";

import "./home.scss";
function Home() {
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

	const onLoadMore = () => {
		page.current++;
		getMovies(page.current);
	};

	const content = movieList.map((item, i) => (
		<MovieCard key={i} movie={item} />
	));

	return (
		<div className="movie__list">
			<ul className="movie__flex">{content}</ul>
			<button
				className="button button__main button__long"
				onClick={onLoadMore}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	);
}

export default Home;
