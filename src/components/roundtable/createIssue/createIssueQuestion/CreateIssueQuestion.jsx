import React, { useState } from "react";

import { TextField } from "../../../textFields/TextField";
import { useMutation } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { ADD_QUESTIOM as newQ } from "../../../../resolvers/mutations";
import { ISSUEBYID as issueById } from "../../../../resolvers/queries";

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
						<li className="textCount noHover">
							<em>{inputValue.length}</em> / 10000
						</li>
					</ul>
					<input
						value={question}
						onChange={(e) => setQuestion(e.target.value)}
					/>
					<TextField
						modules={modules}
						formats={formats}
						inputValue={inputValue}
						setInputValue={setInputValue}
					/>
				</div>
			</article>
			<article>
				<ul className="options">
					<li>
						<a className="button big">Wrap up this issue</a>
					</li>
					<l1>
						<a
							className="button big"
							onClick={() => {
								addQuestion({
									variables: {
										issue: issueid,
										question,
										questionDetail: inputValue,
										questionNumber: questionNum,
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
