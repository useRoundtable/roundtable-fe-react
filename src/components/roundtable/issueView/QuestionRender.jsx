import React from "react";

import { QuestionList } from "./questions/QuestionList";
import { ResponseInput } from "./ResponseInput";

import { QuestionCard } from "./questions/QuestionCard";
import { GatherResponse } from "./GatherResponse";

export const QuestionRender = ({ issueStatus, questions }) => {
	return (
		<>
			{/* <QuestionList questions={questions} /> */}
			<ResponseInput issueStatus={issueStatus} />
		</>
	);
};
