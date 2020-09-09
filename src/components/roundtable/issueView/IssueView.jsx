import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { IssueAuthorView } from "./AuthorView/IssueAuthorView";
import { IssueMemberView } from "./IssueMemberView";

import { ISSUEBYID as IBID } from "../../../resolvers/queries";
import { getUser } from "../../../auth/index";

export const IssueView = () => {
	const [inputValue, setInputValue] = useState("");
	const { id } = getUser();
	const { issueid } = useParams();

	const { loading, error, data } = useQuery(IBID, {
		variables: { id: issueid },
	});

	if (loading) {
		return <h3>Loading</h3>;
	}
	if (error) {
		return <h3>This Issue is either private or does not exist</h3>;
	}

	/*
		BE SURE TO COME BACK TO THIS PIECE OF CODE
		YOU MADE A MESS HERE TONY.
	*/
	if (id == parseInt(data.issueById.issueAuthor.id)) {
		return <IssueAuthorView issue={data.issueById} IBID={IBID} />;
	}

	return <IssueMemberView issue={data.issueById} />;
};
