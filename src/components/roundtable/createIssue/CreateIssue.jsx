import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { CreateIssueQuestion } from "./createIssueQuestion/CreateIssueQuestion";
import { Question } from "../questionResponses/Question";
import { WeekMap } from "./WeekMap";

import { TextField } from "../../textFields/TextField";

import { useQuery, useMutation } from "@apollo/client";
import { CREATE_ISSUE as issueById } from "../../../resolvers/queries";
import { UPDATE_ISSUE as updateIssue } from "../../../resolvers/mutations";

import { parsePublishDate } from "../../../utils";
import { getUser } from "../../../auth";
import { RenderMarkdown } from "../../universalComponents/RenderMarkdown";

export const CreateIssue = () => {
	let questionNumber = 0;
	const week = [1, 2, 3, 4, 5, 6, 7];
	const user = getUser();
	const [publishDate, setPublishDate] = useState(0);
	const { issueid, roundtableId } = useParams();
	const [promptData, setPromptData] = useState("");

	const { data, error, loading } = useQuery(issueById, {
		variables: {
			id: issueid,
		},
	});

	const [update] = useMutation(updateIssue, {
		onCompleted({ updateIssue }) {
			window.location.assign(`/roundtable/${roundtableId}/issue/${issueid}`);
		},
	});

	if (loading) {
		return <h3> loading </h3>;
	}

	const time = parsePublishDate(publishDate);
	const questions = data.issueById.questions;

	// Checking if the user is the issue author or not.
	if (user.id !== parseInt(data.issueById.issueAuthor.id)) {
		window.location.assign(`/roundtable/${roundtableId}/issue/${issueid}`);
	}

	return (
		<section className="issue new">
			<article class="issueHeader">
				<h3 class="issue">
					<span class="number">New Issue</span>
					<span class="status">{data.issueById.currentStatus}</span>
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
							{data.issueById.issueAuthor.firstName}{" "}
							{data.issueById.issueAuthor.lastName[0]}
						</li>
					</ul>
					{data.issueById.prompt ? (
						<RenderMarkdown source={data.issueById.prompt} />
					) : (
						<TextField
							inputValue={promptData}
							setInputValue={setPromptData}
							placeholder="Describe this issue..."
						/>
					)}
				</div>
			</article>
			<article className="questionList">
				<ul className="questionList">
					<h6 className="questionListHeader">
						Collect responses for {data.issueById.title} until {time}.
					</h6>
					{week.map((day) => {
						return (
							<WeekMap
								publishDate={publishDate}
								setPublishDate={setPublishDate}
								day={day}
							/>
						);
					})}
				</ul>
			</article>
			{questions.map((question) => {
				questionNumber++;
				return (
					<Question question={question} questionNum={questionNumber} />
				);
			})}
			<CreateIssueQuestion questionNum={questions.length + 1} />
			<ul>
				<li>
					<a
						className="button big"
						onClick={() => {
							update({
								variables: {
									prompt: promptData,
									title: data.issueById.title,
									id: issueid,
									currentStatus: "Collecting Responses!",
								},
							});
						}}
					>
						Wrap up this issue
					</a>
				</li>
			</ul>
		</section>
	);
};
