import React from "react";

import { ResponseList } from "../../../memberList/ResponseList";

import { useParams, useRouteMatch } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { DELETE_ISSUE as issueDelete } from "../../../../resolvers/mutations";

import { getUser } from "../../../../auth";

import { RenderMarkdown } from "../../../universalComponents/RenderMarkdown";

export const IssueCard = ({ card, issueNumber }) => {
	const { path } = useRouteMatch();
	const { roundtableId } = useParams();
	const { id } = getUser();
	const [deleteIssue] = useMutation(issueDelete);
	return (
		<>
			<ul className="issueList allIssues">
				<li>
					<h3 className="issue">
						<span className="number">Issue #{issueNumber}</span>
						<span className="title">{card.title}</span>
						<span className="status">{card.currentStatus}</span>
						<span className="message">
							<RenderMarkdown source={card.prompt} />
						</span>
					</h3>
					<ul className="options">
						<li className="priority">
							{card.issueAuthor.id == id ? (
								<a
									className="button new"
									onClick={() => {
										window.location.assign(
											`/roundtable/${roundtableId}/issue/${card.id}`
										);
									}}
								>
									Add Questions
								</a>
							) : (
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
							)}
						</li>
						<li>
							<a
								className="button notPriority"
								// onClick={(e) => enterRoundtable(e, "/roundtable/edit")}
							>
								{card.currentStatus === "Published"
									? `${card.publishedAt}`
									: `${card.publishDate}`}
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
							<ResponseList issue={card.id} />
						</li>
						<li className="kudos">&hearts; {card.issueKudos}</li>
						{id == card.issueAuthor.id ? (
							<>
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

								<li className="more">
									<a
										onClick={() => {
											deleteIssue({
												variables: {
													id: card.id,
												},
											});
										}}
									>
										Delete
									</a>
								</li>
							</>
						) : (
							""
						)}
					</ul>
				</li>
			</ul>
		</>
	);
};
