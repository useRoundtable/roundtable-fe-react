import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { UserProfile } from "../Profiles/UserProfile";
import { ListDisplay } from "../memberList/ListDisplay";

import { useQuery } from "@apollo/client";

import { NAVBAR_USER as loggedInUser } from "../../resolvers/queries";

export const NavBar = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	Modal.setAppElement("#root");

	const closeModal = () => {
		setIsOpen(false);
	};
	const openModal = () => {
		setIsOpen(true);
	};

	const { data, loading } = useQuery(loggedInUser);
	if (loading) {
		return "";
	}

	return (
		<>
			<nav className="navigation">
				<ul>
					<li className="selected">
						<Link to="/dashboard">
							<h6> My Roundtables</h6>
						</Link>
					</li>
					{/*<li>
						<Link to="/explore">
							<h6>Explore</h6>
						</Link>
					</li>*/}
					<li className="account toggleDropdown">
						<Link>
							{data ? (
								<>
									<h6>{data.loggedInUser.firstName}</h6>
									<ul className="stats">
										<ul className="members">
											<ListDisplay info={null} />
										</ul>
									</ul>
								</>
							) : (
								""
							)}
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
				{data ? (
					<UserProfile closeModal={closeModal} user={data.loggedInUser} />
				) : (
					""
				)}
			</Modal>
		</>
	);
};
