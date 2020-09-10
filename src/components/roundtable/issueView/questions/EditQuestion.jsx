import React, { useState } from "react";
import { TextField } from "../../../textFields/TextField";

import { useMutation } from "@apollo/client";

import { UPDATE_QUESTION as updateQuestion } from "../../../../resolvers/mutations";
import { RenderMarkdown } from "../../../universalComponents/RenderMarkdown";

export const EditQuestion = ({
	question,
	qNumber,
	isActive,
	setActiveComponent,
	setIsEditing,
	isEditing,
	QBIID,
	issueid,
}) => {
	const [inputValue, setInputValue] = useState(question.questionDetail);
	const [questionInput, setQuestionInput] = useState(question.question);

	const [editQuestion, { error }] = useMutation(updateQuestion, {
		onCompleted({ updateQuestion }) {
			setActiveComponent(0);
			setIsEditing(0);
		},
	});
	if (error) {
		console.log(error);
		return <p>{error.message}</p>;
	}
	console.log("question", question);
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
					<input
						className="headerFour"
						value={questionInput}
						type="text"
						onChange={(e) => setQuestionInput(e.target.value)}
					/>
					<TextField
						inputValue={inputValue}
						setInputValue={setInputValue}
					/>
					<ul class="options">
						<li>
							<a
								class="button big"
								onClick={() =>
									editQuestion({
										variables: {
											id: question.id,
											question: questionInput,
											questionDetail: inputValue,
										},
										refetchQueries: [
											{
												query: QBIID,
												variables: {
													id: issueid,
												},
											},
										],
									})
								}
							>
								Edit Question
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
