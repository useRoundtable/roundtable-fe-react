import React from "react";
import { exitRoundtable } from "../../../utils";
import { useParams } from "react-router-dom";

import { MemberList } from "../../memberList/MemberList";

export const RoundtableHeader = () => {
	const { id } = useParams();
	console.log(id);
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
							window.location.assign(`/roundtable/${id}/members`);
						}}
					>
						<MemberList />
						10 Members
					</li>
					<li
						className="issues"
						onClick={() => {
							window.location.assign(`/roundtable/${id}`);
						}}
					>
						6 issues
					</li>
					<li
						className="responses new"
						onClick={() => {
							window.location.assign(`/roundtable/${id}/responses`);
						}}
					>
						33 New Responses
					</li>
				</ul>
			</nav>
		</>
	);
};
