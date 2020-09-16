import React, { useState } from "react";

import { RTAnimation } from "../animation/roundtableAni";

import "./myRoundtableList.css";

import { enterRoundtable } from "../../utils";
import { getUser } from "../../auth";

import { useMutation } from "@apollo/client";
import { DELETE_ROUNDTABLE as deleteRoundtable } from "../../resolvers/mutations";
import Modal from "react-modal";
import { InviteModal } from "./InviteModal";
import { DeleteModal } from "./DeleteModal";

export const MyRoundtableList = ({
	props: { roundtableName, description, members, id, issues, owner },
}) => {
	Modal.setAppElement("#root");
	document.body.classList.remove("editing");
	const loggedInUser = getUser();
	const [modalIsOpen, setIsOpen] = useState(false);
	const [openModal, setOpenModal] = useState("");

	return (
		<>
			<section className="table">
				<div
				onClick={(e) => enterRoundtable(e, `/roundtable/${id}`)}
				></div>
				<span className="image">
					<img
						src="https://images.unsplash.com/photo-1598965897289-4768a8799acc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
						alt="This roundtable's name"
					/>
				</span>
				<RTAnimation members={members} name={roundtableName} />
				<h2>{roundtableName}</h2>
				<h3>
					<span className="message">{description}</span>
				</h3>
				<ul className="stats">
					{members.length === 0 ? (
						<li>Only You</li>
					) : (
						<li>{members.length} Members</li>
					)}
					{issues.length ? (
						<li>
							<strong>{issues.length}</strong> Issues
						</li>
					) : (
						<li>
							<strong>No</strong> Issues Published
						</li>
					)}
				</ul>
				
				{issues.length ? (
					<h5 className="issue">
						<span className="number">Issue #{issues.length}</span>
						<span className="title">{issues[0].title}</span>
						<span className="status">Gathering Responses</span>
					</h5>
				) : (
					<h5 className="issue">
						<span className="number">Issue #1</span>
						<span className="title">Get Started!</span>
						<span className="status">Just Starting!</span>
					</h5>
				)}
				<ul className="options">
					<li>
						<a
							className="button new"
							onClick={(e) => enterRoundtable(e, `/roundtable/${id}/issue/${issues[0].id}`)}
						>
							View Issue
						</a>
					</li>
					{loggedInUser.id == owner.id ? (
						<>
							<li>
								<a
									className="button notPriority"
									onClick={(e) =>
										enterRoundtable(e, `/roundtable/${id}`)
									}
								>
									Publish
								</a>
							</li>
							<li>
								<a
									className="button notPriority"
									onClick={(e) => {
										setIsOpen(true);
										setOpenModal("invite");
									}}
								>
									Invite
								</a>
							</li>
							<li>
								<a
									className="button notPriority"
									onClick={(e) => {
										setIsOpen(true);
										setOpenModal("delete");
									}}
								>
									Delete
								</a>
							</li>
						</>
					) : (
						""
					)}
				</ul>
			</section>
			<Modal
				isOpen={modalIsOpen}
				portalClassName="overlay-container"
				className="modal"
				overlayClassName="overlay"
				shouldCloseOnEsc={true}
				closeTimeoutMS={200}
				onRequestClose={() => setIsOpen(false)}
			>
				{openModal === "invite" ? (
					<InviteModal
						setIsOpen={setIsOpen}
						roundtableName={roundtableName}
						description={description}
						members={members}
						roundtableId={id}
						owner={owner}
						issues={issues}
					/>
				) : (
					<DeleteModal
						setIsOpen={setIsOpen}
						roundtableId={id}
						setOpenModal={setOpenModal}
						rtName={roundtableName}
					/>
				)}
			</Modal>
		</>
	);
};
