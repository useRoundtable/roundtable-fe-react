import React from "react";

import { ResponseList } from "../../../memberList/ResponseList";
import { useParams, useRouteMatch } from "react-router-dom";

import {useMutation} from '@apollo/react-hooks'
import {DELETE_ISSUE as issueDelete} from "@resolvers/mutations"

import {getUser} from '../../../../auth'

export const IssueCard = ({ card }) => {
	const { path } = useRouteMatch();
	const { roundtableId } = useParams();
	const {id} = getUser()
	const [deleteIssue] = useMutation(issueDelete)
	return (
		<>
			<ul className="issueList allIssues">
				<li>
					<h3 className="issue">
						<span className="number">Issue #{card.issueNumber}</span>
						<span className="title">{card.title}</span>
						<span className="status">{card.currentStatus}</span>
						<span className="message">{card.prompt}</span>
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
						<li
							className="more"
							onClick={() => {
								window.location.assign(
									`${roundtableId}/issue/${card.id}/new`
								);
							}}
						>
							Edit Issue
						</li>
						{card.issueAuthor.id == id ?
						<li className="more">
							<a onClick={
								() => {
									deleteIssue({
										variables: {
											id: card.id
										}
									})
								}
							}>Delete</a>
						</li> : ""}
					</ul>
				</li>
			</ul>
		</>
	);
};
