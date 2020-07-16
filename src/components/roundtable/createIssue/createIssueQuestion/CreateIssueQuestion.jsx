import React, { useState } from "react";

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

export const CreateIssueQuestion = ({ issueId }) => {
	const [inputValue, setInputValue] = useState("");
	const [prompt, setPrompt] = useState("");
	return (
		<>
			<article className="question">
				<div className="questionContent">
					<h6 className="questionNumber">Question 1</h6>
					<h4 className="question">
						What was your major accomplishment this week?
					</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Integer tempor dolor nec lorem pharetra, quis cursus purus
						iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit.
					</p>
				</div>
			</article>

			<article className="question">
				<div className="questionContent">
					<h6 className="questionNumber">Question 2</h6>
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
						<a className="button big">Add Question</a>
					</l1>
				</ul>
			</article>
		</>
	);
};
