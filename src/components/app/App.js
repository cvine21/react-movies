import { useEffect } from "react";
import Home from "../../pages/home/Home";
import { fetchMovieList } from "../../services/movieService";
import AppHeader from "../appHeader/AppHeader";

function App() {
	return (
		<div className="app">
			<AppHeader />
			<main>
				<Home />
				{/* <Movie /> */}
			</main>
		</div>
	);
}

export default App;
