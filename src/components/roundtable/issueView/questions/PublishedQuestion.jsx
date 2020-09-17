import React from "react";

import { useParams } from "react-router-dom";

import { ListDisplay } from "../../../memberList/ListDisplay";

export const PublishedQuestion = ({ data, qNumber }) => {
	const { issueid, roundtableId } = useParams();

	return (
		<article
			className="question"
			onClick={() => {
				window.location.assign(
					`/roundtable/${roundtableId}/issue/${issueid}/question/${data.id}`
				);
			}}
		>
			<div className="questionContent">
				<h6 className="questionNumber">Question {qNumber}</h6>
				<h4 className="question">{data.question}</h4>
			</div>
			<ul className="stats">
				{data.responses.length === 0 ? (
					<li
						className="members"
						onClick={() => {
							window.location.assign(
								`/roundtable/${roundtableId}/issue/${issueid}/question/${data.id}`
							);
						}}
					>
						Awaiting Responses
						<ul className="members waiting">
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</li>
				) : (
					<li
						className="members"
						onClick={() => {
							window.location.assign(
								`/roundtable/${roundtableId}/issue/${issueid}/question/${data.id}`
							);
						}}
					>
						{data.responses.length} Responses
						<ul className="members">
							{data.responses.map((response) => {
								return <ListDisplay info={response.responseAuthor} />;
							})}
						</ul>
					</li>
				)}
				<li className="kudos">&hearts; 0</li>
			</ul>
		</article>
	);
};
