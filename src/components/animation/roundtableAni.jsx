import React from "react";
import "./roundtableAni.css";

export const RTAnimation = ({ members }) => {
	if (members.length === 0) {
		return (
			<ul className="roundtable">
				<h5></h5>
				<section>
					<li className="empty">
						<span>
							<span>+ Invite A Friend</span>
						</span>
					</li>
				</section>
			</ul>
		);
	} else {
		return (
			<>
				<ul className="roundtable">
					<section>
						{members.map(({ user }) => {
							if (user.userName) {
								return (
									<li>
										<span>
											<span>{user.userName}</span>
										</span>
									</li>
								);
							} else if (user.avatar) {
								return (
									<li>
										<span>
											<span>{user.userName}</span>
										</span>
										<img src={user.avatar} />
									</li>
								);
							} else {
								return (
									<li>
										<span>
											<span>User # {user.id}</span>
										</span>
									</li>
								);
							}
						})}
					</section>
				</ul>
			</>
		);
	}
};
