import React, { useState } from "react";
import { IssueCard } from "./issueCard/IssueCard";

import { getUser } from "../../../auth/index";

import { useLocation, useParams } from "react-router-dom";

import { useMutation, useQuery } from "@apollo/client";
import { CREATE_ISSUE as newIssue } from "../../../resolvers/mutations";
import { IBR as issueQuery } from "../../../resolvers/queries";

export const IssueList = ({ owner }) => {
	const { id } = getUser();
	const location = useLocation();
	const { roundtableId } = useParams();

	let issueNumber = 0;

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
		return (
			<section className="issueList">
				<p>error!</p>
			</section>
		);
	}

	if (data.issuesByRTId.length === 0) {
		return (
			<div>
				{owner == id ? (
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
				) : (
					""
				)}
			</div>
		);
	}

	return (
		<section className="issueList">
			{id == owner ? (
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
										},
									});
								}}
							>
								+ Create
							</a>
						</h3>
					</li>
				</ul>
			) : (
				""
			)}
			<h4>Current Issue</h4>
			<ul className="issueList currentIssue">
				<IssueCard
					card={data.issuesByRTId[data.issuesByRTId.length - 1]}
					issueNumber={data.issuesByRTId.length}
				/>
			</ul>
			<h4>
				{data.issuesByRTId.length - 1 === 1
					? "Previous Issue"
					: `${data.issuesByRTId.length - 1} Published Issues`}{" "}
			</h4>
			<ul className="issueList allIssues">
				{data.issuesByRTId
					.slice(0, data.issuesByRTId.length - 1)
					.map((issue) => {
						issueNumber++;
						return <IssueCard card={issue} issueNumber={issueNumber} />;
					})}
			</ul>
		</section>
	);
};
