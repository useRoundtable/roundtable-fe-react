import React, { useState } from "react";

import { useParams } from "react-router-dom";

import { getUser } from "../../../auth";
import { parseDate } from "../../../utils";

import { RenderMarkdown } from "../../universalComponents/RenderMarkdown";
import { TextField } from "../../textFields/TextField";
import { QuestionRender } from "./QuestionRender";

export const IssueMemberView = ({ issue }) => {
	const { issueid } = useParams();
	const [isEditing, setIsEditing] = useState(false);
	const [inputValue, setInputValue] = useState("");

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
			{issue.prompt ? (
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
				</article>
			) : (
				<p></p>
			)}
			{/* <ul className="options">
					<li>
						<a
							className="button"
							onClick={() => {
								window.location.assign(`${location.pathname}/respond`);
							}}
						>
							Answer Questions
						</a>
					</li>
					<li>
						<a className="button notPriority" href="javascript:void(0)">
							View Responses
						</a>
					</li>
				</ul> */}
			<QuestionRender
				issueStatus={issue.currentStatus}
				questions={issue.questions}
			/>
		</section>
	);
};
