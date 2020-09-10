import React from "react";

export const MemberCard = ({ user }) => {
	return (
		<li>
			<span className="avatar">
				<img
					alt="avatar"
					src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg"
				/>
			</span>
			<h4>{user.firstName ? user.firstName : user.userName}</h4>
			<a href="javascript:void(0)" className="button">
				View Profile
			</a>
			<div className="stats">
				<span>2,572</span>
				<span className="active">Active</span>
			</div>
		</li>
	);
};
