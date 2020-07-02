import React from "react";
import { enterRoundtable, exitRoundtable } from "../../../utils";
import { IssueCard } from "./issueCard/IssueCard";

export const IssueList = ({ data }) => {
	console.log("PROPS AND DATA IN ISSUE LIST", data);
	const issueNumber = data.length;
	let number = 0;
	return (
		<section className="issueList">
			<ul className="issueList">
				<li className="new">
					<h3 className="issue">
						<span className="number">Issue #{issueNumber + 1}</span>
						<span className="title">New Issue&hellip;</span>
						<a className="button">+ Create</a>
					</h3>
				</li>
			</ul>
			<h4>Current Issue</h4>
			<ul className="issueList currentIssue">
				{data.slice(0, 1).map((issue) => {
					return <IssueCard card={issue} number={issueNumber} />;
				})}
			</ul>
			<h4>
				{issueNumber - 1 === 1
					? "Previous Issue"
					: `${issueNumber - 1} Previous Issues`}{" "}
			</h4>
			<ul className="issueList allIssues">
				{data.splice(1).map((issue) => {
					number++;
					return <IssueCard card={issue} number={number} />;
				})}
			</ul>
		</section>
	);
};
