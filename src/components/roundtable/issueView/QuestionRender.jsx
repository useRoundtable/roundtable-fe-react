import React, { useState } from "react";
import classNames from "classnames";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QuestionCard } from "./questions/QuestionCard";
import { PublishedQuestion } from "./questions/PublishedQuestion";
import { EditQuestion } from "./questions/EditQuestion";

import { QUESTIONS_BY_ISSUE as QBIID } from "../../../resolvers/queries";

export const QuestionRender = ({ issueStatus }) => {
	const [isEditing, setIsEditing] = useState(0);
	const [activeComponent, setActiveComponent] = useState(0);
	const [isResponding, setIsResponding] = useState(0);
	let qNumber = 0;

	const { issueid } = useParams();
	const { data, error, loading } = useQuery(QBIID, {
		variables: {
			id: issueid,
		},
	});
	if (error) {
		return <p>Error</p>;
	}
	if (loading) {
		return <p>loading</p>;
	}

	return data.issueById.questions.map((question) => {
		qNumber++;
		if (isEditing === qNumber) {
			return (
				<EditQuestion
					question={question}
					qNumber={qNumber}
					isActive={activeComponent === qNumber ? true : false}
					setActiveComponent={setActiveComponent}
					setIsEditing={setIsEditing}
					isEditing={isEditing === qNumber ? true : false}
					QBIID={QBIID}
					issueid={issueid}
				/>
			);
		} else if (issueStatus === "Published") {
			return <PublishedQuestion data={question} qNumber={qNumber} />;
		}
		return (
			<QuestionCard
				issueStatus={issueStatus}
				data={question}
				qNumber={qNumber}
				isResponding={isResponding === qNumber ? true : false}
				setIsResponding={setIsResponding}
				setIsEditing={setIsEditing}
				QBIID={QBIID}
				issueid={issueid}
			/>
		);
	});
};
