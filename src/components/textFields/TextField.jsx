import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const TextField = ({ modules, formats, inputValue, setInputValue }) => {
	console.log(inputValue);
	return (
		<ReactQuill
			theme="snow"
			value={inputValue}
			onChange={setInputValue}
			modules={modules}
			formats={formats}
		/>
	);
};
