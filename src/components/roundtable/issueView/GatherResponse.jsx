import React, { useState } from "react";
import { Question } from "../questionResponses/Question";
import { TextField } from "../../textFields/TextField";

import { useMutation } from "@apollo/react-hooks";

import { CREATE_RESPONSE as sendResponse } from "@resolvers/mutations";

export const GatherResponse = ({ question }) => {
	const [inputValue, setInputValue] = useState("");

	const [createResponse] = useMutation(sendResponse);

	return (
		<>
			<article className="question">
				<div className="questionContent">
					<h6 className="questionNumber">Question 3</h6>
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
