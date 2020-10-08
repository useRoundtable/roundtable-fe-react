import React from "react";

import { useQuery } from "@apollo/client";
import { LOGGED_IN_USER as loggedInUser } from "../../resolvers/queries";

export const ListDisplay = ({ info }) => {
	const { loading, data, error } = useQuery(loggedInUser);
	if (loading) {
		return (
			<li>
				<em>O</em>
			</li>
		);
	}
	if (info === null) {
		info = data.loggedInUser;
	}
	if (info.avatar !== null) {
		return (
			<li>
				<img alt="avatar" src={info.avatar} />
			</li>
		);
	}
	if (info.firstName && info.lastName) {
		return (
			<li>
				<em>
					{info.firstName[0]}
					{info.lastName[0]}
				</em>
			</li>
		);
	}
	if (info.firstName) {
		return (
			<li>
				<em>{info.firstName[0]}</em>
			</li>
		);
	}
	if (info.userName) {
		return (
			<li>
				<em>
					{info.userName[0]}
					{info.userName[1]}
				</em>
			</li>
		);
	}
	return (
		<>
			{info.responseAuthor.length} Responses
			<li>
				<em>TK</em>
			</li>
		</>
	);
};
