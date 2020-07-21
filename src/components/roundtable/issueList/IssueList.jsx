import React, { useState } from "react";
import { IssueCard } from "./issueCard/IssueCard";

import { useLocation, useParams } from "react-router-dom";

import { useMutation } from "@apollo/react-hooks";
import { CREATE_ISSUE as newIssue } from "../../../resolvers/mutations";

export const IssueList = (props) => {
	const location = useLocation();
	const { roundtableId } = useParams();
	const issueNumber = props.data.length;
	let number = issueNumber;
	const [issueTitle, setIssueTitle] = useState("");
	const [createIssue, { loading, data, error }] = useMutation(newIssue, {
		onCompleted({ createIssue }) {
			window.location.assign(
				`${location.pathname}/issue/${createIssue.id}/new`
			);
		},
	});
	if (issueNumber === 0) {
		return (
			<div>
				<section className="issueList">
					<h5> Create your first Issue!</h5>
					<ul className="issueList">
						<li className="new">
							<h3 className="issue">
								<span className="number">Issue #{issueNumber + 1}</span>
								<input
									id="newIssue"
									name="newIssue"
									type="text"
									value={issueTitle}
									placeholder="What is the subject of this issue?"
									required
									onChange={(e) => setIssueTitle(e.target.value)}
								/>
								<label for="newIssue" className="newIssueLabel"></label>
								<span className="title">New Issue&hellip;</span>
								<a
									className="button"
									onClick={(e) => {
										createIssue({
											variables: {
												title: issueTitle,
												roundtable: roundtableId,
											},
										});
									}}
								>
									+ Create
								</a>
							</h3>
						</li>
					</ul>
				</section>
			</div>
		);
	}

	if (error) {
		console.log(error.message);
		return (
			<section className="issueList">
				<p>error!</p>
			</section>
		);
	}

	return (
		<section className="issueList">
			<ul className="issueList">
				<li className="new">
					<h3 className="issue">
						<span className="number">Issue #{issueNumber + 1}</span>
						<input
							id="newIssue"
							name="newIssue"
							type="text"
							value={issueTitle}
							placeholder="What is the subject of this issue?"
							required
							onChange={(e) => setIssueTitle(e.target.value)}
						/>
						<label for="newIssue" className="newIssueLabel"></label>
						<span className="title">New Issue&hellip;</span>
						<a
							className="button"
							onClick={(e) => {
								createIssue({
									variables: {
										title: issueTitle,
										roundtable: roundtableId,
									},
								});
							}}
						>
							+ Create
						</a>
					</h3>
				</li>
			</ul>
			<h4>Current Issue</h4>
			<ul className="issueList currentIssue">
				{props.data.slice(0, 1).map((issue) => {
					return <IssueCard card={issue} number={issueNumber} />;
				})}
			</ul>
			<h4>
				{issueNumber - 1 === 1
					? "Previous Issue"
					: `${issueNumber - 1} Previous Issues`}{" "}
			</h4>
			<ul className="issueList allIssues">
				{props.data.slice(1, props.data.length).map((issue) => {
					console.log(issue);
					number--;
					return <IssueCard card={issue} number={number} />;
				})}
			</ul>
		</section>
	);
};
