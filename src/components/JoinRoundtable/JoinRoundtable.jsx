import React from "react";

import { Login } from "../login/Login";

import { MemberView } from "../roundtable/members/MemberView";

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
	const href = window.location.origin;
	const token = localStorage.getItem("authorization");
	const [join, { error }] = useMutation(addMember, {
		onCompleted({ addMember }) {
			window.location.replace(`${href}/roundtable/${roundtableId}`);
		},
	});

	const user = useQuery(loggedInUser);

	const { loading, data } = useQuery(roundtable, {
		variables: {
			id: roundtableId,
		},
	});

	if (loading) {
		return <p>loading</p>;
	}
	if (error) {
		return <p>{error.message}</p>;
	}

	if (user.data) {
		return (
			<section className="issue">
				<article className="message textCenter">
					<h2>{data.roundtableById.roundtableName}</h2>
					<p>You were invited to join this roundtable.</p>
					<a
						className="button"
						onClick={() => {
							join({
								variables: {
									roundtable: roundtableId,
									user: user.data.loggedInUser.id,
								},
							});
						}}
					>
						Join
					</a>
				</article>
				<article className="message">
					<h2></h2>
					<h2>
						{data.roundtableById.owner.firstName}{" "}
						{data.roundtableById.owner.lastName}
					</h2>
					<blockquote>Roundtable Description</blockquote>
				</article>
				<MemberView members={data.roundtableById.members} />
			</section>
		);
	}
	return <LoginRender redirectTo={window.location.pathname} />;
};
