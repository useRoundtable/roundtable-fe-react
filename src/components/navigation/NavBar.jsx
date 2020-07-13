import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { UserProfile } from "../profiles/UserProfile";

export const NavBar = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	console.log("isOpen", modalIsOpen);
	Modal.setAppElement("#root");

	return (
		<>
			<nav className="navigation">
				<ul>
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
						<Link>
							<h6>Steven</h6>
							<img src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg" />
						</Link>
						<ul className="dropdown">
							<li onClick={() => setIsOpen(true)}>Account</li>
							<li>Preferences</li>
							<li>Updates</li>
							<li
								className="logout"
								onClick={() => {
									localStorage.removeItem("authorization");
									window.location.assign("/login");
								}}
							>
								Log Out
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<Modal isOpen={modalIsOpen}>
				<UserProfile />
				<p onClick={() => setIsOpen(false)}>Close</p>
			</Modal>
		</>
	);
};

{
	/*<li>
					<Link to="/">
						<h6>Home</h6>
					</Link>
				</li>
				<li>
					<Link to="/onboarding">
						<h6>Onboarding</h6>
					</Link>
				</li>*/
}
{
	/*<li className="logo">
					<ul className="roundtable logo">
							<section>
								<li></li>
								<li></li>
								<li></li>
							</section>
						</ul>
				</li>*/
}
