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

	return (
		<>
			<ul className="members">
				{data.responsesByIssue.length} Responses
				{data.responsesByIssue.map((response) => {
					return <ListDisplay info={response.responseAuthor} />;
				})}
			</ul>
		</>
	);
};
