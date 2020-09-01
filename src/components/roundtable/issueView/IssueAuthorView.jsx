import React, { useState } from "react";

import { useParams } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { UPDATE_ISSUE as updateIssue } from "../../../resolvers/mutations";

import { getUser } from "../../../auth";
import { parseDate } from "../../../utils";

import { RenderMarkdown } from "../../universalComponents/RenderMarkdown";
import { TextField } from "../../textFields/TextField";
import { QuestionRender } from "./QuestionRender";
import { CreateIssueQuestion } from "../createIssue/createIssueQuestion/CreateIssueQuestion";

export const IssueAuthorView = ({ issue, IBID }) => {
	const { issueid } = useParams();
	const [isEditing, setIsEditing] = useState(false);
	const [inputValue, setInputValue] = useState(issue.prompt || "");

	const [update] = useMutation(updateIssue, {
		onCompleted({ updateIssue }) {
			setIsEditing(false);
		},
	});
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
					<span className="title">{issue.title}!</span>
				</h3>
			</article>
			{isEditing === false ? (
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
							{issue.issueAuthor.userName} says{" "}
						</li>
					</ul>
					<RenderMarkdown source={issue.prompt} />
					<ul>
						<li
							className="more"
							onClick={() => {
								setIsEditing(true);
							}}
						>
							Edit
						</li>
					</ul>
				</article>
			) : (
				<article className="message">
					<TextField
						inputValue={inputValue}
						setInputValue={setInputValue}
						placeholder={issue.prompt}
					/>
					<a
						onClick={() => {
							update({
								variables: {
									prompt: inputValue,
									title: issue.title,
									id: issueid,
								},
								refetchQueries: [
									{
										query: IBID,
										variables: {
											id: issueid,
										},
									},
								],
							});
						}}
					>
						Submit
					</a>
				</article>
			)}
			<QuestionRender
				issueStatus={issue.issueStatus}
				questions={issue.questions}
			/>
			<CreateIssueQuestion questionNum={issue.questions.length + 1} />
		</section>
	);
};
