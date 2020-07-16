import React from "react";

import { ResponseList } from "../../../memberList/ResponseList";
import { useParams, useRouteMatch } from "react-router-dom";

export const IssueCard = ({ card, number, id }) => {
	const { path } = useRouteMatch();
	const { roundtableId } = useParams();
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
								onClick={(e) =>
									window.location.assign(
										`/roundtable/${roundtableId}/issue/${card.id}`
									)
								}
							>
								{/* 2 New Responses */}
								Respond
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
						<li
							className="members"
							onClick={(e) =>
								window.location.assign(
									`/roundtable/${roundtableId}/issue/${card.id}`
								)
							}
						>
							11 Responses
							<ResponseList />
						</li>
						<li className="kudos">&hearts; 482</li>
						<li className="more">Edit Issue</li>
					</ul>
				</li>
			</ul>
		</>
	);
};
