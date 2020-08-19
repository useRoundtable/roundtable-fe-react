import React, { useState } from "react";
import { IssueCard } from "./issueCard/IssueCard";

import { useLocation, useParams } from "react-router-dom";

import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_ISSUE as newIssue } from "@resolvers/mutations";
import { IBR as issueQuery } from "../../../resolvers/queries";

export const IssueList = () => {
	const location = useLocation();
	const { roundtableId } = useParams();

	const [issueTitle, setIssueTitle] = useState("");
	const [createIssue] = useMutation(newIssue, {
		onCompleted({ createIssue }) {
			window.location.assign(
				`${location.pathname}/issue/${createIssue.id}/new`
			);
		},
	});

	const { data, error, loading } = useQuery(issueQuery, {
		variables: { roundtableId: roundtableId },
	});

	if (loading) {
		return <p>loading</p>;
	}
	
	if (error) {
		console.log(error.message);
		return (
			<section className="issueList">
				<p>error!</p>
			</section>
		);
	}
	if (data.issuesByRTId.length === 0) {
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
									placeholder="What is the subject?"
									required="required"
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


	return (
		<section className="issueList">
			<ul className="issueList">
				<li className="new">
					<h3 className="issue">
						<span className="number">
							Issue #{data.issuesByRTId.length + 1}
						</span>
						<input
							id="newIssue"
							name="newIssue"
							type="text"
							value={issueTitle}
							placeholder="What is the subject?"
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
										issueNumber: data.issuesByRTId.length + 1,
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
				{data.issuesByRTId.slice(0, 1).map((issue) => {
					return <IssueCard card={issue} />;
				})}
			</ul>
			<h4>
				{data.issuesByRTId.length - 1 === 1
					? "Previous Issue"
					: `${data.issuesByRTId.length - 1} Previous Issues`}{" "}
			</h4>
			<ul className="issueList allIssues">
				{data.issuesByRTId
					.slice(1, data.issuesByRTId.length)
					.map((issue) => {
						return <IssueCard card={issue} />;
					})}
			</ul>
		</section>
	);
};
