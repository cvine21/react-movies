import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../../pages/home/Home";
import Movie from "../../pages/movie/Movie";
import AppHeader from "../appHeader/AppHeader";

function App() {
	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/movie/:id">
							<Movie />
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
