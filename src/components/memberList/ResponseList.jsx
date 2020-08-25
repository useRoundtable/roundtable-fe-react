import React from "react";

import { ListDisplay } from "./ListDisplay";

import { ISSUE_RESPONSES as getResponses } from "../../resolvers/queries";
import { useQuery } from "@apollo/client";

export const ResponseList = ({ issue }) => {
	const { data, loading } = useQuery(getResponses, {
		variables: {
			id: issue,
		},
	});
	let responseToMap = [];
	if (loading) {
		return <p> loading </p>;
	}
	console.log(data, "data");

	return (
		<>
			{data.issueById.questions.map(({ responses }) => {
				console.log(responses, "Responses in Map");
				if (responses) {
					responseToMap = [...responseToMap, ...responses];
					console.log(responseToMap, "Response");

					return <>No Responses</>;
				}
				return <>No Responses</>;
			})}
		</>
	);
};
