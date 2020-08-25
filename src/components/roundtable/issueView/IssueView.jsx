import React, { useState } from "react";

import { useParams, useRouteMatch, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QuestionRender } from "./QuestionRender";
import { RenderMarkdown } from "../../universalComponents/RenderMarkdown";
import { TextField } from "../../textFields/TextField";

import { ISSUEBYID as IBID } from "../../../resolvers/queries";

export const IssueView = () => {
	const { issueid } = useParams();

	const { loading, error, data } = useQuery(IBID, {
		variables: { id: issueid },
	});

	// Change this value to switch which component is rendered down under
	const issueStatus = "Gathering";

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
			{data.issueById.prompt ? (
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
					<RenderMarkdown source={data.issueById.prompt} />
				</article>
			) : (
				"ADD A PROMPT INPUT FIELD HERE, TONY"
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
				issueStatus={issueStatus}
				questions={data.issueById.questions}
			/>
		</section>
	);
};
