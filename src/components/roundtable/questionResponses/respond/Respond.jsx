import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";

import { ISSUEBYID as issueById } from "../../../../resolvers/queries";
import { QUESTIONSBYISSUEID as questionsByIID } from "../../../../resolvers/queries";

import { Question } from "../Question";
import { TextField } from "../../../textFields/TextField";

const modules = {
	toolbar: [
		[{ header: [1, 2, false] }],
		["bold", "italic", "underline", "strike", "blockquote"],
		[
			{ list: "ordered" },
			{ list: "bullet" },
			{ indent: "-1" },
			{ indent: "+1" },
		],
		["link"],
		["clean"],
		["image"],
	],
};

const formats = [
	"header",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"list",
	"bullet",
	"indent",
	"link",
	"image",
];

export const Respond = () => {
	const { issueid } = useParams();

	const { loading, error, data } = useQuery(issueById, {
		variables: { id: issueid },
	});

	// USE THIS WHEN YOU UPDATE YOUR LIVE DATABASE
	// const { loading, error, data } = useQuery(questionsByIId, {
	// 	variables: { issueId: issueid },
	// });

	if (loading) {
		return <h1>Loading Questions</h1>;
	}
	console.log(data.issueById.questions);

	return (
		<section className="issue answer">
			{data.issueById.questions.map((question) => {
				return (
					<>
						<Question question={question} questionNum={1} />
						<TextField
							modules={modules}
							formats={formats}
							questionId={question.id}
						/>
					</>
				);
			})}
		</section>
	);
};
