import React from "react";

import { CreateIssueQuestion } from "./createIssueQuestion/CreateIssueQuestion";
import { useQuery } from "@apollo/react-hooks";
import { ISSUEBYID as issueById } from "@resolvers/queries";
import { Question } from "../questionResponses/Question";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

export const CreateIssue = () => {
	const { issueid } = useParams();
	let questionNum = 0;

	const { data, error, loading } = useQuery(issueById, {
		variables: {
			id: issueid,
		},
	});
	if (loading) {
		return <h3> loading </h3>;
	}
	console.log("data in creatissue", data.issueById.questions);
	return (
		<section className="issue new">
			<article class="issueHeader">
				<h3 class="issue">
					<span class="number">New Issue</span>
					<span class="status">Under Construction</span>
					<span class="title">
						{data.issueById.title
							? `${data.issueById.title}`
							: `No Title`}
					</span>
				</h3>
			</article>
			<article className="question prompt">
				<div className="questionContent">
					<ul className="stats">
						<li className="members">
							<ul className="members">
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png"
									/>
								</li>
							</ul>
							Tony K.
						</li>
						<li className="textCount noHover">
							<em>0</em> / 10000
						</li>
					</ul>
					<ReactQuill
						theme="snow"
						placeholder="Describe what this issue is about..."
					/>
				</div>
			</article>
			<article className="questionList">
				<ul className="questionList">
					<h6 className="questionListHeader">
						Collect responses for&hellip;until July 17, 2020.
					</h6>
					<li>1 day</li>
					<li>2 days</li>
					<li>3 days</li>
					<li className="done">4 days</li>
					<li>5 days</li>
					<li>6 days</li>
					<li>1 week</li>
				</ul>
			</article>
			{data.issueById.questions.map((question) => {
				questionNum++;
				return <Question question={question} questionNum={questionNum} />;
			})}
			<CreateIssueQuestion questionNum={questionNum + 1} />
		</section>
	);
};
