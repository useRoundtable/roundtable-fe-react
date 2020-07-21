import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const TextField = ({
	modules,
	formats,
	inputValue,
	setInputValue,
	inputLength,
}) => {
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
					<em>{inputLength}</em> / 10000
				</li>
			</ul>
		</>
	);
};
