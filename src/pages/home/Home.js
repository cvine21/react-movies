import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/moveCard/MovieCard";
import { fetchMovies, selectMovies } from "../../redux/moviesSlice";

import "./home.scss";

function Home() {
	const [isLodingNew, setIsLoadingNew] = useState(false);
	const { items, status } = useSelector(selectMovies);
	const dispatch = useDispatch();
	const page = useRef(1);

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	const getMovies = useCallback((page = 1) => {
		dispatch(fetchMovies(page));
	}, []);

	const onLoadMore = () => {
		page.current++;
		setIsLoadingNew(true);
		getMovies(page.current);
	};

	const moviesList = items.map((item, i) => (
		<MovieCard key={i} movie={item} />
	));

	const content =
		(status === "loading" && !isLodingNew && (
			<span className="loader"></span>
		)) ||
		moviesList;

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
