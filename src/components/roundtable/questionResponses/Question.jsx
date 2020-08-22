import React from "react";
import {RenderMarkdown} from '../../universalComponents/RenderMarkdown'

export const Question = ({ question, questionNum }) => {
	return (
		<article className="question">
			<div className="questionContent">
				<h6 className="questionNumber">Question {questionNum}</h6>
				<h4 className="question">{question.question}</h4>
				<RenderMarkdown source={question.questionDetail}/>
			</div>
		</article>
	);
};
