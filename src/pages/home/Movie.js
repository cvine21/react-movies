import React from "react";
import { useParams } from "react-router-dom";

function Movie() {
	const id = useParams();
	return <div className="container">Movie</div>;
}

export default Movie;
