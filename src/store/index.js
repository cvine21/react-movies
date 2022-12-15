import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../redux/moviesSlice";
import singleMovieReducer from "../redux/singleMovieSlice";

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		singleMovie: singleMovieReducer,
	},
});
