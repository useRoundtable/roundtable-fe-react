import React from "react";

import { Login } from "../login/Login";

import { LoginRender } from "../login/LoginRender";

import { useQuery, useMutation } from "@apollo/client";
import {
	ROUNDTABLE_INVITE as roundtable,
	NAVBAR_USER as loggedInUser,
} from "../../resolvers/queries";
import { JOIN_ROUNDTABLE as addMember } from "../../resolvers/mutations";

import { getUser } from "../../auth";

import { useParams } from "react-router-dom";

export const JoinRoundtable = () => {
	const { roundtableId } = useParams();
	const token = localStorage.getItem("authorization");
	const [join] = useMutation(addMember);

	const user = useQuery(loggedInUser);

	const { loading, data } = useQuery(roundtable, {
		variables: {
			id: roundtableId,
		},
	});

	if (loading) {
		return <p>loading</p>;
	}

	if (user.data) {
		return (
			<article>
				<p>You were invited to join {data.roundtableById.roundtableName}</p>
				<button
					onClick={() => {
						join({
							variables: {
								roundtable: roundtableId,
								user,
							},
						});
					}}
				>
					Join
				</button>
				<button>Login/Register</button>
			</article>
		);
	}
	return <LoginRender redirectTo={window.location} />;
};
