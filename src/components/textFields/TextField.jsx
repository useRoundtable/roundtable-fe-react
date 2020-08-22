import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

export const TextField = ({
	modules,
	formats,
	inputValue,
	setInputValue,
	inputLength,
	placeholder,
}) => {
	return (
		<>
			<ReactQuill
				theme="snow"
				value={inputValue}
				onChange={setInputValue}
				modules={modules}
				formats={formats}
				placeholder={placeholder}
			/>
			<ul className="stats">
				<li className="textCount noHover">
					<em>{inputValue.length}</em> / 10000
				</li>
			</ul>
		</>
	);
};
