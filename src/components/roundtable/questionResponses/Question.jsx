import React from "react";

export const Question = ({ question, questionNum }) => {
	console.log("QUESTION QUESTION ", question);
	return (
		<article className="question">
			<div className="questionContent">
				<h6 className="questionNumber">Question {questionNum}</h6>
				<h4 className="question">{question.question}</h4>
				<p>{question.questionDetail}</p>
			</div>
		</article>
	);
};
