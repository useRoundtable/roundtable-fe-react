import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav className="navigation">
			<ul>
				{/*<li>
					<Link to="/">
						<h6>Home</h6>
					</Link>
				</li>
				<li>
					<Link to="/onboarding">
						<h6>Onboarding</h6>
					</Link>
				</li>*/}
				<li>
					<Link to="/dashboard">
						<h6> New</h6>
					</Link>
				</li>
				<li className="selected">
					<Link to="/dashboard">
						<h6> My Roundtables</h6>
					</Link>
				</li>
				<li>
					<Link to="/explore">
						<h6>Explore</h6>
					</Link>
				</li>
				<li>
					<Link to="/account">
						<h6>Account</h6>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
