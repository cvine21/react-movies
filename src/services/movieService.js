import axios from "axios";

const _apiBase = "https://yts.mx/api/v2/";
const _apiMovieList = "list_movies.json";
const _apiMovieDetails = "movie_details.json";

export async function getMovieList(page = 1) {
	try {
		const response = await axios.get(
			`${_apiBase}${_apiMovieList}?limit=8&page=${page}`
		);
		const movieList = response.data.data.movies;

		return movieList.map((movie) => _transformMovie(movie));
	} catch (err) {
		console.error(err);
	}
}

export async function getMovie(id) {
	try {
		const response = await axios.get(
			`${_apiBase}${_apiMovieDetails}?movie_id=${id}`
		);
		const movie = response.data.data.movie;

		return _transformMovie(movie);
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
		like_count,
		background_image,
		url,
	} = movie;

	return {
		id,
		title,
		rating,
		genres,
		year,
		description_full,
		medium_cover_image,
		like_count,
		background_image,
		url,
	};
}
