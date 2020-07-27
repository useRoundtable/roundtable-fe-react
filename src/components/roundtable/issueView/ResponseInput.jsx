import React, { useState } from "react";
import classNames from "classnames";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import { QuestionCard } from "./questions/QuestionCard";
import { GatherResponse } from "./GatherResponse";

import { QUESTIONS_BY_ISSUE as QBIID } from "@resolvers/queries";

export const ResponseInput = ({ issueStatus }) => {
	const [activeComponent, setActiveComponent] = useState(0);
	let qNumber = 0;
	const thisClass = classNames({
		active: "active",
	});
	const { issueid } = useParams();
	const { data } = useQuery(QBIID, {
		variables: {
			id: issueid,
		},
	});
	if (issueStatus === "Gathering") {
		return data.issueById.questions.map((question) => {
			qNumber++;
			return (
				<GatherResponse
					question={question}
					qNumber={qNumber}
					isActive={activeComponent === qNumber ? true : false}
					setActiveComponent={setActiveComponent}
				/>
			);
		});
	} else {
		return data.issueById.questions.map((question) => {
			return <QuestionCard data={question} qNumber={qNumber} />;
		});
	}
};
