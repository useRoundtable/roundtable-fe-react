import React from "react";

export const Question = ({ question, questionNum }) => {
	console.log("QUESTION QUESTION ", question);
	return (
		<article className="question">
			<div className="questionContent">
				<h6 className="questionNumber">Question {questionNum}</h6>
				<h4 className="question">{question.question}</h4>
				<p>
					QUESTION CONTEXT WILL GO HERE WHEN IT IS LIVE ON THE DATA BASE
				</p>
			</div>
		</article>
	);
};
