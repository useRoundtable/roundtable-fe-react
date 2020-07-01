import React from "react";
import { enterRoundtable, exitRoundtable } from "../../../utils";

export const IssueList = ({ data }) => {
	console.log("PROPS AND DATA IN ISSUE LIST", data);
	return (
		<section className="issueList">
			<ul className="issueList">
				<li className="new">
					<h3 className="issue">
						<span className="number">Issue #5</span>
						<span className="title">New Issue&hellip;</span>
						<a className="button">+ Create</a>
					</h3>
				</li>
			</ul>
			<h4>Current Issue</h4>
			<ul className="issueList currentIssue">
				<li>
					<h3 className="issue">
						<span className="number">Issue #4</span>
						<span className="title">Hey everyone!</span>
						<span className="status">Collecting responses</span>
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
								onClick={(e) => enterRoundtable(e, "/roundtable")}
							>
								12 New Responses
							</a>
						</li>
						<li>
							<a
								className="button notPriority"
								onClick={(e) => enterRoundtable(e, "/roundtable/edit")}
							>
								Set Publish Date
							</a>
						</li>
					</ul>
					<ul className="stats">
						<li className="members">
							Awaiting Responses
							<ul className="members waiting">
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</li>
						<li className="more">Edit Issue</li>
					</ul>
				</li>
			</ul>
			<h4>
				4 Previous Issues <em>.issueList</em>
			</h4>
			<ul className="issueList allIssues">
				<li>
					<h3 className="issue">
						<span className="number">Issue #3</span>
						<span className="title">COVID-19 Edition</span>
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
								onClick={(e) => enterRoundtable(e, "/roundtable")}
							>
								2 New Responses
							</a>
						</li>
						<li>
							<a
								className="button notPriority"
								onClick={(e) => enterRoundtable(e, "/roundtable/edit")}
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
				<li>
					<h3 className="issue">
						<span className="number">Issue #2</span>
						<span className="title">Checking In</span>
						<span className="status">Complete</span>
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
								className="button"
								onClick={(e) => enterRoundtable(e, "/roundtable")}
							>
								View Issue
							</a>
						</li>
						<li className="priority">
							<a
								className="button notPriority"
								onClick={(e) => enterRoundtable(e, "/roundtable")}
							>
								Public Link
							</a>
						</li>
						<li>
							<a
								className="button notPriority"
								onClick={(e) => enterRoundtable(e, "/roundtable/edit")}
							>
								Duplicate
							</a>
						</li>
						<li>
							<a
								className="button notPriority"
								onClick={(e) => enterRoundtable(e, "/roundtable/edit")}
							>
								Make Private
							</a>
						</li>
					</ul>
					<ul className="stats">
						<li className="members">
							6 Responses
							<ul className="members">
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
							</ul>
						</li>
						<li className="kudos">&hearts; 482</li>
						<li className="privacy public">Public</li>
						<li className="visits">25,302 Visits</li>
					</ul>
				</li>
				<li>
					<h3 className="issue">
						<span className="number">Issue #1</span>
						<span className="title">
							Welcome to the Advisors Roundtable!
						</span>
						<span className="status">Complete</span>
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
								className="button"
								onClick={(e) => enterRoundtable(e, "/roundtable")}
							>
								View Issue
							</a>
						</li>
						<li>
							<a
								className="button notPriority"
								onClick={(e) => enterRoundtable(e, "/roundtable/edit")}
							>
								Duplicate
							</a>
						</li>
						<li>
							<a
								className="button notPriority"
								onClick={(e) => enterRoundtable(e, "/roundtable/edit")}
							>
								Make Public
							</a>
						</li>
					</ul>
					<ul className="stats">
						<li className="members">
							3 Responses
							<ul className="members">
								<li>
									<em>SK</em>
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
							</ul>
						</li>
						<li className="kudos">&hearts; 34</li>
						<li className="privacy">Private</li>
					</ul>
				</li>
			</ul>
		</section>
	);
};
