import React, { useState } from "react";
import { IssueCard } from "./issueCard/IssueCard";

import { useLocation, useParams } from "react-router-dom";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_ISSUE as newIssue } from "@resolvers/mutations";
import { ISSUES_BY_ROUNDTABLE as issueQuery } from "@resolvers/queries";

export const IssueList = () => {
	const location = useLocation();
	const { roundtableId } = useParams();

	const [issueTitle, setIssueTitle] = useState("");
	const [createIssue, { error }] = useMutation(newIssue, {
		onCompleted({ createIssue }) {
			window.location.assign(
				`${location.pathname}/issue/${createIssue.id}/new`
			);
		},
	});

	const {
		data: {
			roundtableById: { issues },
		},
	} = useQuery(issueQuery, {
		variables: {
			id: roundtableId,
		},
	});
	if (error) {
		return <p>error</p>;
	}
	console.log(issues, "data in issue list");
	if (issues.length === 0) {
		return (
			<div>
				<section className="issueList">
					<h5> Create your first Issue!</h5>
					<ul className="issueList">
						<li className="new">
							<h3 className="issue">
								<span className="number">Issue #1</span>
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
												currentStatus: "Just Adding Questions!",
												issueNumber: 1,
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
						<span className="number">Issue #{issues.length + 1}</span>
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
										currentStatus: "Just Adding Questions!",
										issueNumber: issues.length + 1,
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
				{issues.slice(0, 1).map((issue) => {
					return <IssueCard card={issue} />;
				})}
			</ul>
			<h4>
				{issues.length - 1 === 1
					? "Previous Issue"
					: `${issues.length - 1} Previous Issues`}{" "}
			</h4>
			<ul className="issueList allIssues">
				{issues.slice(1, issues.length).map((issue) => {
					console.log(issue);
					return <IssueCard card={issue} />;
				})}
			</ul>
		</section>
	);
};
