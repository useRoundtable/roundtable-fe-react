import React, { useState } from "react";

import { useParams } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { UPDATE_ISSUE as updateIssue } from "../../../../resolvers/mutations";

import { parseDate } from "../../../../utils";

import { RenderMarkdown } from "../../../universalComponents/RenderMarkdown";
import { TextField } from "../../../textFields/TextField";
import { QuestionRender } from "../QuestionRender";
import { CreateIssueQuestion } from "../../createIssue/createIssueQuestion/CreateIssueQuestion";

export const EditIssue = ({ issue, IBID, setIsEditing }) => {
	const { issueid } = useParams();
	const [prompt, setPrompt] = useState(issue.prompt || "");
	const [title, setTitle] = useState(issue.title || "");

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
					<span className="title">
						<input
							className="headerOne"
							inputValue={issue.title}
							setInputValue={setTitle}
							placeholder={issue.title}
						/>
					</span>
				</h3>
			</article>

			<article className="message">
				<TextField
					inputValue={prompt}
					setInputValue={setPrompt}
					placeholder={issue.prompt}
				/>
				<a
					className="button save"
					onClick={() => {
						update({
							variables: {
								prompt,
								title,
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
			<QuestionRender
				issueStatus={issue.issueStatus}
				questions={issue.questions}
			/>
			<CreateIssueQuestion questionNum={issue.questions.length + 1} />
		</section>
	);
};
