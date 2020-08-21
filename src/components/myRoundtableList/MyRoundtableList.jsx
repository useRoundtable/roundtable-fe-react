import React, {useState} from "react";

import { RTAnimation } from "../animation/roundtableAni";

import "./myRoundtableList.css";

import { enterRoundtable } from "../../utils";
import {getUser} from '../../auth'

import { useMutation } from "@apollo/react-hooks";
import { DELETE_ROUNDTABLE as deleteRoundtable } from "../../resolvers/mutations";
import { ROUNDTABLES as RTbyUID } from "../../resolvers/queries";
import Modal from 'react-modal'
import { InviteModal } from "./InviteModal";

export const MyRoundtableList = ({
	props: { roundtableName, description, members, id, issues, owner },
}) => {
	const [deleteRT] = useMutation(deleteRoundtable);
	Modal.setAppElement("#root");
	document.body.classList.remove("editing");
	const loggedInUser = getUser()
	const [modalIsOpen, setIsOpen] = useState(false)

	return (
		<>
			<section className="table">
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
							onClick={(e) => enterRoundtable(e, `/roundtable/${id}`)}
						>
							View Issues
						</a>
					</li>
					<li>
						<a
							className="button notPriority"
							onClick={(e) => enterRoundtable(e, `/roundtable/${id}`)}
						>
							Publish
						</a>
					</li>
					<li>
						<a
							className="button notPriority"
							onClick={(e) => setIsOpen(true)}
						>
							Invite
						</a>
					</li>
					<li>
						{loggedInUser.id == owner.id ? 
						<a
							className="button notPriority"
							onClick={(e) => {
								deleteRT({
									variables: { id },
									refetchQueries: [{ query: RTbyUID }],
								});
							}}
						>
							Delete
						</a> : ""}
					</li>
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
				<InviteModal setIsOpen={setIsOpen} roundtableId={id}/>
			</Modal>
		</>
	);
};
