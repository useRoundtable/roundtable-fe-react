import React from "react";

import { ListDisplay } from "./ListDisplay";

import { UNIQUE_RESPONDERS as uniqueResponders } from "../../resolvers/queries";

import { useQuery } from "@apollo/client";

export const ResponseList = ({ issue }) => {
	const {
		data: responders,
		loading: responderLoading,
		error: responderError,
	} = useQuery(uniqueResponders, {
		variables: {
			id: +issue,
		},
	});

	if (responderLoading) {
		return <p> loading </p>;
	}
	if (responderError) {
		return <p>{responderError.message}</p>;
	}
	if (!responders) {
		return <li>0 Responders</li>;
	}

	return (
		<>
			<ul className="members">
				{responders.uniqueResponders.length} Responders
				{responders.uniqueResponders.slice(0, 9).map((response) => {
					return <ListDisplay info={response.responseAuthor} />;
				})}
			</ul>
		</>
	);
};
