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
				{/*<li className="logo">
					<ul className="roundtable logo">
							<section>
								<li></li>
								<li></li>
								<li></li>
							</section>
						</ul>
				</li>*/}
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
				<li className="account toggleDropdown">
					<Link to="/login">
						<h6 onClick={() => localStorage.removeItem("authorization")}>
							Steven
						</h6>
						<img src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg" />
					</Link>
					<ul className="dropdown">
						<li>Account</li>
						<li>Preferences</li>
						<li>Updates</li>
						<li className="logout">Log Out</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};
