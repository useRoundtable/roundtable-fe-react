import React, { useState } from "react";

import { useMutation, useQuery } from "@apollo/client";
import { INVITE_MEMBER as invite } from "../../resolvers/mutations";
import { ROUNDTABLE_INVITE as roundtable } from "../../resolvers/queries";

export const InviteModal = ({
	setIsOpen,
	roundtableId,
	members,
	owner,
	roundtableName,
	issues,
}) => {
	const [inviteMember, { error }] = useMutation(invite, {
		onCompleted({ invite }) {
			window.location.assign("/dashboard");
		},
	});
	const [email, setEmail] = useState("");

	if (error) {
		console.log(error);
		return <p>{error.message}</p>;
	}
	return (
		<>
			<header>
				<h4>{roundtableName}</h4>
				<a className="close" onClick={() => setIsOpen(false)}>
					<span>×</span>
				</a>
			</header>
			<nav>
				<ul className="stats noHover">
					<li className="roundtables">{members.length} Members</li>
					<li className="issues">{issues.length} Issues</li>
				</ul>
			</nav>
			<div className="content">
				<form className="full">
					<div className="description">
						<h5>Invite Members</h5>
						<p>
							Grow {roundtableName} by inviting new members. Members will
							receive each issue and can contribute responses for other
							roundtable members to see.
						</p>
						<p>
							<strong>
								YOU CAN CURRENTLY ONLY INVITE ONE PERSON AT A TIME
							</strong>
						</p>
					</div>
					<div className="field">
						<input
							type="email"
							name="inviteEmail"
							id="inviteEmail"
							type="email"
							value={email}
							placeholder=""
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<label for="inviteEmail">Friend's Email</label>
						<a className="close" href="javascript:void(0)">
							<span>×</span>
						</a>
					</div>
					{/* <div className="formBottom">
						<a className="button small" href="javascript:void(0)">
							+ Add Another
						</a>
					</div> */}
					<a
						className="button floatRight"
						onClick={() => {
							inviteMember({
								variables: {
									owner: owner.userName,
									roundtableId,
									invite: email,
									roundtableName: roundtableName,
								},
							});
						}}
					>
						+ Invite
					</a>
				</form>
			</div>
		</>
	);
};
