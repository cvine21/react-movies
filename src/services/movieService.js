import axios from "axios";

const _apiBase = "https://yts.mx/api/v2/";

export async function fetchMovieList(page = 1) {
	try {
		const response = await axios.get(
			`${_apiBase}list_movies.json?limit=8&page=${page}`
		);
		const movieList = response.data.data.movies;

		return movieList.map((movie) => _transformMovie(movie));
	} catch (err) {
		console.error(err);
	}
}

function _transformMovie(movie) {
	const {
		id,
		title,
		rating,
		genres,
		year,
		description_full,
		medium_cover_image,
	} = movie;

	return {
		id,
		title,
		rating,
		genres,
		year,
		description_full,
		medium_cover_image,
	};
}
