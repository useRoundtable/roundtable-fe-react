import React from "react";

export const MemberCard = ({ user }) => {
	return (
		<li>
			{user.avatar ? 
			<span className="avatar">
				<img
					alt="avatar"
					src={user.avatar}
				/>
			</span> : ""}
			{/* TODO: Be sure to add extra render logic here later. */}
			<h4>{user.firstName ? `${user.firstName}` : user.userName}</h4>
			{/* <a href="javascript:void(0)" className="button">
				View Profile
			</a> */}
			<div className="stats">
				<span>2,572</span>
				<span className="active">Active</span>
			</div>
		</li>
	);
};
