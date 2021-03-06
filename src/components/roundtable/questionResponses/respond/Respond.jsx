import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { ISSUEBYID as issueById } from "../../../../resolvers/queries";
import { QUESTIONSBYISSUEID as questionsByIID } from "../../../../resolvers/queries";

import { Question } from "../Question";
import { TextField } from "../../../textFields/TextField";

export const Respond = () => {
	const { issueid } = useParams();
	const [inputValue, setInputValue] = useState("");

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

	return (
		<section className="issue answer">
			{data.issueById.questions.map((question) => {
				return (
					<div className="response">
						<Question question={question} questionNum={1} />
						<TextField
							inputValue={inputValue}
							setInputValue={setInputValue}
							questionId={question.id}
						/>
					</div>
				);
			})}
		</section>
	);
};
