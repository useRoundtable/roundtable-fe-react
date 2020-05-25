import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Home } from "../home/Home";

export const NavBar = () => {
	return (
		<>
			<ul>
				<li>
					<h6>
						<Link to="/home">Home</Link>
					</h6>
				</li>
				<li>
					<h6>
						<Link to="/onboarding">Onboarding</Link>
					</h6>
				</li>

				<li>
					<h6>
						<Link to="/????">My Roundtables</Link>
					</h6>
				</li>

				<li>
					<h6>
						<Link to="/explore">Explore</Link>
					</h6>
				</li>

				<li>
					<h6>
						<Link to="/about">About</Link>
					</h6>
				</li>
			</ul>
		</>
	);
};

// export const NavBar = () => {
// 	return
// }
