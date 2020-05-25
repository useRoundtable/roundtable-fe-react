import React from "react";

export const TestPage = () => {
	const functionName = () => {
		return console.log("this is a function");
	};
	return (
		<div>
			<h2>This is a test page</h2>
			{functionName()}
		</div>
	);
};
