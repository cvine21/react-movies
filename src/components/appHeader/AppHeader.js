import React from "react";
import { Link } from "react-router-dom";
import "./appHeader.scss";

function AppHeader() {
	return (
		<header className="app__header">
			<Link to="/" style={{ textDecoration: "none" }}>
				<h1 className="app__title">
					<span>MOVIES</span> information portal
				</h1>
			</Link>
		</header>
	);
}

export default AppHeader;
