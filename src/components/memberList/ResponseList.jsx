import React from "react";

import { ListDisplay } from "./ListDisplay";

import { ISSUE_RESPONSES as getResponses } from "../../resolvers/queries";
import { useQuery } from "@apollo/client";

export const ResponseList = ({ issue }) => {
	const { data, loading, error } = useQuery(getResponses, {
		variables: {
			issueId: +issue,
		},
	});

	if (loading) {
		return <p> loading </p>;
	}
	if (error) {
		return <p>{error.message}</p>;
	}
	if (!data) {
		return <li>0 Responses</li>;
	}

	// TODO: Set it up so that it shows unique users for responses
	return (
		<>
			<ul className="members">
				{data.responsesByIssue.length} Responses
				{data.responsesByIssue.slice(0, 9).map((response) => {
					return <ListDisplay info={response.responseAuthor} />;
				})}
			</ul>
		</>
	);
};
