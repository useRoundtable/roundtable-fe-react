import React from "react";

// When you get back to this page Tony be sure to add the for the members to show up as their avatar if they have one or their username first letters otherwise. If no username have them display firstname[0] and lastname[0]
export const MemberList = ({ members }) => {
	return (
		<>
			<ul className="members">
				{members.map(({ user }) => {
					return (
						<li>
							<em>
								{user.userName[0]}
								{user.userName[1]}
							</em>
						</li>
					);
				})}
				{/* <li>
					<em>SK</em>
					<img
						alt="avatar"
						src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg"
					/>
				</li>
				*/}
			</ul>
		</>
	);
};
