import React from "react";

import { RenderMarkdown } from "../../universalComponents/RenderMarkdown";

import { parseDate } from "../../../utils/index";

import { ListDisplay } from "../../memberList/ListDisplay";

export const Response = ({ response }) => {
	return (
		<section className="answer">
			<div className="answerContent">
				<ul className="kudos">
					<li classname="icon">&hearts;</li>
				</ul>
				<RenderMarkdown source={response.content} />
				<ul className="stats">
					<li classname="kudos">&hearts; {response.kudos}</li>
				</ul>
			</div>
			<div className="carat"></div>
			<ul className="stats">
				<li className="members">
					<ul className="members">
						<ListDisplay info={response.responseAuthor} />
					</ul>
					{response.responseAuthor.firstName
						? response.responseAuthor.firstName
						: response.responseAuthor.userName}
				</li>
				<li className="date noHover">
					{parseDate(parseInt(response.createdAt))}
				</li>
			</ul>
		</section>
	);
};
