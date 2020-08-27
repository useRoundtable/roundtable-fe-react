import React from "react";

export const ListDisplay = ({ info }) => {
	console.log(info, "INFO");
	if (info.responseAuthor.avatar !== null) {
		return (
			<li>
				<img alt="avatar" src={info.responseAuthor.avatar} />
			</li>
		);
	}
	if (info.responseAuthor.firstName && info.responseAuthor.lastName) {
		return (
			<li>
				<em>
					{info.responseAuthor.firstName[0]}
					{info.responseAuthor.lastName[0]}
				</em>
			</li>
		);
	}
	if (info.responseAuthor.firstName) {
		return (
			<li>
				<em>{info.responseAuthor.firstName[0]}</em>
			</li>
		);
	}
	if (info.responseAuthor.userName) {
		return (
			<li>
				<em>
					{info.responseAuthor.userName[0]}
					{info.responseAuthor.userName[1]}
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
