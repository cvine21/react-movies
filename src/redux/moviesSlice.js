import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovieList } from "../services/movieService";

const initialState = {
	items: [],
	status: "idle",
};

export const fetchMovies = createAsyncThunk(
	"movies/fetchMovies",
	async (page = 1) => {
		const res = await getMovieList(page);
		return res;
	}
);

export const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.status = "idle";
				state.items = [...state.items, ...action.payload];
			})
			.addCase(fetchMovies.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export const selectMovies = (state) => state.movies;
export default moviesSlice.reducer;
