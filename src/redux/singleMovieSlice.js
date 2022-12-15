import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovie } from "../services/movieService";

const initialState = {
	item: {},
	status: "idle",
};

export const fetchMovie = createAsyncThunk(
	"singleMovie/fetchMovie",
	async (id) => {
		const res = await getMovie(id);
		return res;
	}
);

export const singleMovieSlice = createSlice({
	name: "singleMovie",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovie.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchMovie.fulfilled, (state, action) => {
				state.status = "idle";
				state.item = action.payload;
			})
			.addCase(fetchMovie.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export const selectMovie = (state) => state.singleMovie;
export default singleMovieSlice.reducer;
