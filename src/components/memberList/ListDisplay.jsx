import React from "react";

export const ListDisplay = ({ info }) => {
	console.log(info, "INFO");
	if (info.responses.responseAuthor.avatar !== null) {
		return (
			<li>
				<img alt="avatar" src={info.responses.responseAuthor.avatar} />
			</li>
		);
	}
	if (
		info.responses.responseAuthor.firstName &&
		info.responses.responseAuthor.lastName
	) {
		return (
			<li>
				<em>
					{info.responses.responseAuthor.firstName[0]}
					{info.responses.responseAuthor.lastName[0]}
				</em>
			</li>
		);
	}
	if (info.responses.responseAuthor.firstName) {
		return (
			<li>
				<em>{info.responses.responseAuthor.firstName[0]}</em>
			</li>
		);
	}
	if (info.responses.responseAuthor.userName) {
		return (
			<li>
				<em>
					{info.responses.responseAuthor.userName[0]}
					{info.responses.responseAuthor.userName[1]}
				</em>
			</li>
		);
	}
	return (
		<>
			{info.responses.responseAuthor.length} Responses
			<li>
				<em>TK</em>
			</li>
		</>
	);
};
