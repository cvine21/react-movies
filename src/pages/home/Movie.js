import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../services/movieService";

function Movie() {
	const [movie, setMovie] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetchMovie(id).then((data) => {
			setMovie(data);
		});
	}, []);

	const { title } = movie;

	return (
		<>
			<h1>{title}</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Repudiandae totam rem asperiores esse sunt magnam error repellat
				ipsa a quos?
			</p>
		</>
	);
}

export default Movie;
