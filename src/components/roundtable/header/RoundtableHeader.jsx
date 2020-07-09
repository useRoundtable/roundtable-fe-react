import React from "react";
import { exitRoundtable } from "../../../utils";
import { useParams } from "react-router-dom";

import { MemberList } from "../../memberList/MemberList";

/*
I need to add the logic for what dictates a new response and add tracking to the section below
*/
export const RoundtableHeader = ({ members, issueCount }) => {
	const { roundtableId } = useParams();
	return (
		<>
			<header>
				<h2>Advisors</h2>
				<a
					className="close"
					onClick={(e) => exitRoundtable(e, "/dashboard")}
				>
					<span>&times;</span>
				</a>
			</header>
			<nav>
				<ul className="stats">
					<li
						className="members"
						onClick={() => {
							window.location.assign(
								`/roundtable/${roundtableId}/members`
							);
						}}
					>
						<MemberList members={members} />
						{members.length} Members
					</li>
					<li
						className="issues"
						onClick={() => {
							window.location.assign(`/roundtable/${roundtableId}`);
						}}
					>
						{issueCount} issues
					</li>
					{/* <li
						className="responses new"
						onClick={() => {
							window.location.assign(
								`/roundtable/${roundtableId}/responses`
							);
						}}
					>
						33 New Responses
					</li> */}
				</ul>
			</nav>
		</>
	);
};
