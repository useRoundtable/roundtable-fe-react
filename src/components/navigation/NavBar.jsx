import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Home } from "../home/Home";

export const NavBar = () => {
	return (
		<>
			<ul>
				<li>
					<Link to="/home"><h6>Home</h6></Link>
				</li>
				<li>
					<Link to="/onboarding"><h6>Onboarding</h6></Link>
				</li>

				<li>
					<Link to="/????"><h6> My Roundtables</h6></Link>
				</li>

				<li>
					<Link to="/explore"><h6>Explore</h6></Link>
				</li>

				<li>
					<Link to="/about"><h6>About</h6></Link>
				</li>
			</ul>
		</>
	);
};

// export const NavBar = () => {
// 	return
// }
