import React, { useState } from "react";
import { Question } from "../questionResponses/Question";
import { TextField } from "../../textFields/TextField";
import { useParams } from "react-router-dom";

import { useMutation, useQuery } from "@apollo/react-hooks";

import { CREATE_RESPONSE as sendResponse } from "@resolvers/mutations";
import { ISSUEBYID as IBID } from "@resolvers/queries";

export const GatherResponse = ({
	question,
	isActive,
	setActiveComponent,
	qNumber,
}) => {
	const { issueid } = useParams();
	const { loading, error, data } = useQuery(IBID, {
		variables: { id: issueid },
	});
	const [inputValue, setInputValue] = useState("");
	// const [isDone, setIsDone] = useState(false);
	const [createResponse] = useMutation(sendResponse, {
		onCompleted({ sendResponse }) {
			setInputValue("");
		},
	});
	return (
		<>
			<article
				className="question"
				onClick={() => {
					if (isActive === true) {
						setActiveComponent(0);
					} else {
						setActiveComponent(qNumber);
					}
				}}
			>
				<div className={`questionContent ${isActive ? "active" : ""}`}>
					<h6 className="questionNumber">Question 300</h6>
					<h4 className="question">{question.question}</h4>
					<p>
						QUESTION CONTEXT WILL GO HERE WHEN IT IS LIVE ON THE DATA BASE
					</p>
					<TextField
						inputValue={inputValue}
						setInputValue={setInputValue}
						inputLength={inputValue.length}
						placeholder="What is your response?"
					/>
					<ul class="options">
						<li>
							<a
								class="button big"
								onClick={() =>
									createResponse({
										variables: {
											question: question.id,
											content: inputValue,
										},
									})
								}
							>
								Submit response
							</a>
						</li>
					</ul>
				</div>
			</article>
		</>
	);
};
