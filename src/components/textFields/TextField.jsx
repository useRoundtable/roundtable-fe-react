import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { CREATE_RESPONSE as createResponses } from "../../resolvers/mutations";
import { useMutation } from "@apollo/react-hooks";

export const TextField = ({ modules, formats, questionId }) => {
	const [inputValue, setInputValue] = useState("");

	console.log(questionId);

	const [createResponse] = useMutation(createResponses);
	// console.log(inputValue);
	return (
		<>
			<ReactQuill
				theme="snow"
				value={inputValue}
				onChange={setInputValue}
				modules={modules}
				formats={formats}
			/>
			<ul className="stats">
				<li className="textCount noHover">
					<em>{inputValue.length}</em> / 10000
				</li>
			</ul>
			<article className="question submit">
				<ul class="options textCenter">
					<li>
						<a
							class="button big"
							onClick={() =>
								createResponse({
									variables: {
										questionId,
										content: inputValue,
									},
								})
							}
						>
							Submit response
						</a>
					</li>
				</ul>
			</article>
		</>
	);
};
