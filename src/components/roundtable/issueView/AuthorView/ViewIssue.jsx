import React, { useState } from "react";

import { useParams } from "react-router-dom";

import { parseDate } from "../../../../utils";
import { getUser } from "../../../../auth";

import { RenderMarkdown } from "../../../universalComponents/RenderMarkdown";
import { QuestionRender } from "../QuestionRender";
import { CreateIssueQuestion } from "../../createIssue/createIssueQuestion/CreateIssueQuestion";
import { ListDisplay } from "../../../memberList/ListDisplay";

export const ViewIssue = ({ issue, IBID, setIsEditing }) => {
	const { issueid } = useParams();
	const user = getUser();

	return (
		<section className="issue view">
			<article className="issueHeader">
				<h3 className="issue">
					<span className="number">Issue #{issueid}</span>
					<span className="status">
						{issue.currentStatus === "Published"
							? parseDate(issue.publishedAt)
							: parseDate(issue.publishDate)}
					</span>
					<span className="title">{issue.title}</span>
				</h3>
			</article>
			<article className="message">
				<a
					className="button small edit stickyTop floatRight"
					onClick={() => {
						setIsEditing(true);
					}}
				>
					Edit Issue
				</a>
				<ul className="stats">
					<li className="members">
						<ul className="members">
							<ListDisplay info={null} />
						</ul>
						{issue.issueAuthor.userName} says{" "}
					</li>
				</ul>
				<RenderMarkdown source={issue.prompt} />
			</article>
			<QuestionRender issueStatus={issue.issueStatus} />
			<CreateIssueQuestion questionNum={issue.questions.length + 1} />
		</section>
	);
};
