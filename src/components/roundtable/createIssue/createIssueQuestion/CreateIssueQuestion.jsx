import React, { useState } from "react";

import { TextField } from "../../../textFields/TextField";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { ADD_QUESTIOM as newQ } from "../../../../resolvers/mutations";
import { ISSUEBYID as issueById } from "../../../../resolvers/queries";

export const CreateIssueQuestion = ({ questionNum }) => {
	const { issueid } = useParams();
	const [inputValue, setInputValue] = useState("");
	const [question, setQuestion] = useState("");

	const [addQuestion] = useMutation(newQ, {
		onCompleted({ newQ }) {
			setInputValue("");
			setQuestion("");
		},
	});
	return (
		<>
			<article className="question">
				<div className="questionContent">
					<h6 className="questionNumber">Question {questionNum}</h6>
					<ul className="stats">
						<li className="members">
							<ul className="members">
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png"
									/>
								</li>
							</ul>
							Tony K.
						</li>
					</ul>
					<input
						className="headerFour"
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
					/>
					<TextField
						inputValue={inputValue}
						setInputValue={setInputValue}
						placeholder={"Explain why you're asking this..."}
					/>
				</div>
			</article>
			<article>
				<ul className="options">
					<l1>
						<a
							className="button big"
							onClick={() => {
								addQuestion({
									variables: {
										issue: issueid,
										question,
										questionDetail: inputValue,
									},
									refetchQueries: [
										{
											query: issueById,
											variables: {
												id: issueid,
											},
										},
									],
								});
							}}
						>
							Add Question
						</a>
					</l1>
				</ul>
			</article>
		</>
	);
};
