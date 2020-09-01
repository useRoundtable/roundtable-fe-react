import React from "react";

import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { RESPONSES_BY_QUESTION as responses } from "../../../resolvers/queries";

import { Response } from "./Response";

export const QuestionResponses = ({ questionNum }) => {
	const { questionid } = useParams();

	const { data, loading } = useQuery(responses, {
		variables: {
			id: questionid,
		},
	});
	if (loading) {
		return <p>loading</p>;
	}
	return (
		<section className="issue">
			<article className="question">
				<div className="questionContent">
					{/* <h6 className="questionNumber">Question 1</h6> */}
					<h4 className="question">{data.questionById.question}</h4>
					<p>{data.questionById.questionDetail}</p>
				</div>
			</article>
			<article className="answers">
				{data.questionById.responses.map((response) => {
					return <Response response={response} />;
				})}
			</article>
		</section>
	);
};
