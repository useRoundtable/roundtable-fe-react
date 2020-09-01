import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { UserProfile } from "../Profiles/UserProfile";

import { getUser } from "../../auth";

export const NavBar = () => {
	const user = getUser();

	const [modalIsOpen, setIsOpen] = useState(false);
	Modal.setAppElement("#root");
	const closeModal = () => {
		setIsOpen(false);
	};
	const openModal = () => {
		setIsOpen(true);
	};

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
							<h6>{user.id}</h6>
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
			<Modal
				isOpen={modalIsOpen}
				portalClassName="overlay-container"
				className="modal"
				overlayClassName="overlay"
				shouldCloseOnEsc={true}
				closeTimeoutMS={200}
				onRequestClose={() => closeModal()}
			>
				<UserProfile closeModal={closeModal} />
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
