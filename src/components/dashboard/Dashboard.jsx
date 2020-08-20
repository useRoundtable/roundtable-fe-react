import React from "react";
import { MyRoundtableList } from "../myRoundtableList/MyRoundtableList";
import { CreateRoundtable } from "../createRoundtable/CreateRoundtable";
import { useQuery } from "@apollo/react-hooks";
import { RTAnimation } from "../animation/roundtableAni";
import { Login } from "../login/Login";

import { ROUNDTABLES as RTbyUID } from "../../resolvers/queries";

/* 
TONY
BE SURE TO ADD THE LOGGED IN USER QUERY HERE WHEN YOU GET A CHANCE.
SINCERELY,
TONY
*/
export const Dashboard = () => {
	const { loading, error, data } = useQuery(RTbyUID);
	const token = localStorage.getItem("authorization");
	if (loading) {
		return (
			<>
				<main>
					<article className="myRoundtables">
						<RTAnimation members={[]} />
					</article>
				</main>
			</>
		);
	}
	if (token === null) {
		return (
			<>
				<h4>Please login to continue</h4>
				<Login />
			</>
		);
	} else if (error) {
		console.log(error);
		return (
			<>
				<main>
					<article className="myRoundtables">
						<h1>THERE WAS AN ERROR</h1>
					</article>
				</main>
				<article className="edit"></article>
				<div className="close"></div>
			</>
		);
	}
	return (
		<>
			<main>
				<article className="myRoundtables">
					{data.roundtablesByUserId.map((table) => {
						return <MyRoundtableList props={table} key={table.id} />;
					})}
					<CreateRoundtable />
				</article>
			</main>
			<article className="edit"></article>
			<div className="close"></div>
		</>
	);
};
