import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import { QuestionCard } from "./questions/QuestionCard";

import { ISSUEBYID as IBD } from "../../../resolvers/queries";

export const IssueView = () => {
	const { issueid, roundtableId } = useParams();
	const { path } = useRouteMatch();
	let questionNumber = 0;

	const { loading, error, data } = useQuery(IBD, {
		variables: { id: issueid },
	});
	if (loading) {
		return <h3>Loading</h3>;
	} else if (error) {
		return <h3>This Issue is either private or does not exist</h3>;
	}

	return (
		<section className="issue view">
			<article className="issueHeader">
				<h3 className="issue">
					<span className="number">Issue #{issueid}</span>
					<span className="status">June 6, 2020</span>
					<span className="title">{data.issueById.title}!</span>
				</h3>
			</article>
			<article className="message">
				<ul className="stats">
					<li className="members">
						<ul className="members">
							<li>
								<img
									src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg"
									alt="Steven K."
								/>
							</li>
						</ul>
						{data.issueById.issueAuthor.userName} says{" "}
					</li>
				</ul>
				<p>
					PROMPT GOES HERE, TONY NEEDS TO MAKE IT NULLABLE
					{/* {data.issueById.prompt} */}
				</p>
			</article>
			<article className="questionList">
				<ul className="questionList">
					<h6 className="questionListHeader">Questions</h6>
					<li>What was your major accomplishment this week?</li>
					<li className="done">
						What do you need help with for next week?
					</li>
					<li>What does it look like with no paragraphs?</li>
					{data.issueById.questions.map((question) => {
						return <li>{question.question}</li>;
					})}
				</ul>
				<ul className="options">
					<li>
						<a
							className="button"
							onClick={() =>
								window.location.assign(
									`/roundtable/${roundtableId}/issue/${issueid}/respond`
								)
							}
						>
							Answer Questions
						</a>
					</li>
					<li>
						<a className="button notPriority" href="javascript:void(0)">
							View Responses
						</a>
					</li>
				</ul>
			</article>
			{data.issueById.questions.map((question) => {
				questionNumber++;
				return <QuestionCard data={question} qNumber={questionNumber} />;
			})}
		</section>
	);
};
