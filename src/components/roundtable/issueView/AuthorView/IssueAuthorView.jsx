import React, { useState } from "react";

import { useParams } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { UPDATE_ISSUE as updateIssue } from "../../../../resolvers/mutations";

import { EditIssue } from "./EditIssue";
import { ViewIssue } from "./ViewIssue";

export const IssueAuthorView = ({ issue, IBID }) => {
	const { issueid } = useParams();
	const [isEditing, setIsEditing] = useState(false);
	const [inputValue, setInputValue] = useState(issue.prompt || "");

	const [update] = useMutation(updateIssue, {
		onCompleted({ updateIssue }) {
			setIsEditing(false);
		},
	});
	if (isEditing) {
		return (
			<EditIssue setIsEditing={setIsEditing} issue={issue} IBID={IBID} />
		);
	}
	return <ViewIssue setIsEditing={setIsEditing} issue={issue} />;
};
