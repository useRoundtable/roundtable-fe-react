import React from "react";

export const QuestionList = ({ questions }) => {
	return (
		<article className="questionList">
			<ul className="questionList">
				<h6 className="questionListHeader">Questions</h6>
				{questions.map((question) => {
					return <li>{question.question}</li>;
				})}
			</ul>
		</article>
	);
};
