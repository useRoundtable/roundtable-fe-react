import React from "react";

export const IssueCard = ({ card, number }) => {
	console.log("card", card, number);
	return (
		<>
			<ul className="issueList allIssues">
				<li>
					<h3 className="issue">
						<span className="number">Issue #{number}</span>
						<span className="title">{card.title}</span>
						<span className="status">Wrapping up</span>
						<span className="message">
							Zefhir’s is a parachute rescue system for turbine
							helicopters. Installed above the main rotor, the parachute
							is designed as a backup for conditions where autorotation
							cannot be performed. Zefhir’s is a parachute rescue system
							for turbine helicopters. Installed above the main rotor,
							the parachute is designed as a backup for conditions where
							autorotation cannot be performed. Zefhir’s is a parachute
							rescue system for turbine helicopters. Installed above the
							main rotor, the parachute is designed as a backup for
							conditions where autorotation cannot be performed.Zefhir’s
							is a parachute rescue system for turbine helicopters.
							Installed above the main rotor, the parachute is designed
							as a backup for conditions where autorotation cannot be
							performed.
						</span>
					</h3>
					<ul className="options">
						<li className="priority">
							<a
								className="button new"
								// onClick={(e) => enterRoundtable(e, "/roundtable")}
							>
								2 New Responses
							</a>
						</li>
						<li>
							<a
								className="button notPriority"
								// onClick={(e) => enterRoundtable(e, "/roundtable/edit")}
							>
								Publishing June 3, 2020 at 10:30 A.M.
							</a>
						</li>
					</ul>
					<ul className="stats">
						<li className="members">
							11 Responses
							<ul className="members">
								<li>
									<em>SK</em>
								</li>
								<li>
									<em>TK</em>
								</li>
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/524398486536474624/T_aUvkHo_400x400.jpeg"
									/>
								</li>
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/761998841117683712/janWwuyI_400x400.jpg"
									/>
								</li>
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/898262358476414977/Xletgru4_400x400.jpg"
									/>
								</li>
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/1925156946/tbrooks_400x400.jpg"
									/>
								</li>
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/556233917359853569/vvsGGZxc_400x400.jpeg"
									/>
								</li>
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/469397708986269696/iUrYEOpJ_400x400.png"
									/>
								</li>
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/1268256132532862977/GDvByy9-_400x400.jpg"
									/>
								</li>
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/1165749987185053696/zVMH2HkP_400x400.jpg"
									/>
								</li>
							</ul>
						</li>
						<li className="kudos">&hearts; 482</li>
						<li className="more">Edit Issue</li>
					</ul>
				</li>
			</ul>
		</>
	);
};
