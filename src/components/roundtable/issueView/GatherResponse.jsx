import React, { useState } from "react";
import { TextField } from "../../textFields/TextField";

import { useMutation } from "@apollo/client";

import { CREATE_RESPONSE as sendResponse } from "../../../resolvers/mutations";
import { RenderMarkdown } from "../../universalComponents/RenderMarkdown";

export const GatherResponse = ({
	question,
	isActive,
	setActiveComponent,
	qNumber,
	setIsEditing,
	isEditing,
}) => {
	const [inputValue, setInputValue] = useState("");
	const [createResponse] = useMutation(sendResponse, {
		onCompleted({ sendResponse }) {
			setInputValue("");
			setIsEditing(0);
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
					<h6 className="questionNumber">Question {qNumber}</h6>
					<h4 className="question">{question.question}</h4>
					<RenderMarkdown source={question.questionDetail} />
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
							{isEditing === true ? (
								<a
									onClick={() => {
										setIsEditing(0);
									}}
								>
									Stop Editing
								</a>
							) : (
								""
							)}
						</li>
					</ul>
				</div>
			</article>
		</>
	);
};
