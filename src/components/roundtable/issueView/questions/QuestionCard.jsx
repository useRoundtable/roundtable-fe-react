import React from "react";

import { useParams, useRouteMatch } from "react-router-dom";

// I will HAVE to update the onClick to remove it from the whole element.
export const QuestionCard = ({ data, qNumber }) => {
	const { roundtableId, issueid } = useParams();
	console.log(data);
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
				<p>{data.question.questionDetail}</p>
			</div>
			<ul className="stats">
				{data.responses.length === 0 ? (
					<li className="members">
						Awaiting Responses
						<ul className="members waiting">
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</li>
				) : (
					<li className="members">
						{data.responses.length} Responses
						<ul className="members">
							<li>
								<em>SK</em>
							</li>
							{/* <li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png"
								/>
							</li> */}
						</ul>
					</li>
				)}

				<li className="kudos">&hearts; 275</li>
			</ul>
		</article>
	);
};
