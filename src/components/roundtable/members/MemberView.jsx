import React from "react";

import { MemberCard } from "./MemberCard";

export const MemberView = ({ members }) => {
	// console.log(members);
	return (
		<section className="members">
			<h4>{members.length} Members</h4>
			<ul className="memberList">
				{members.map(({ user }) => {
					console.log(user.userName);
					return <MemberCard user={user} key={user.id} />;
				})}
			</ul>
		</section>
	);
};
