import React from "react";
import { NavBar } from "../navigation/NavBar";
import { MyRoundtableList } from "../myRoundtableList/MyRoundtableList";
import { useQuery } from "@apollo/react-hooks";

import { ROUNDTABLES as RTbyUID } from "../../resolvers/queries";

export const Dashboard = () => {
	const { loading, error, data } = useQuery(RTbyUID);
	if (loading) return <h1>LOADING....</h1>;
	console.log("DATA:", data.roundtablesByUserId);
	if (error) return console.log(error), null;
	return (
		<>
			<NavBar />
			<main>
				<article className="myRoundtables">
					{data.roundtablesByUserId.map((table) => {
						return <MyRoundtableList props={table} />;
					})}
				</article>
			</main>
		</>
	);
};
