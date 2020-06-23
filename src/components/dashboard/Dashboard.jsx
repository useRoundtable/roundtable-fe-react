import React from "react";
import { MyRoundtableList } from "../myRoundtableList/MyRoundtableList";
import { CreateRoundtable } from "../createRoundtable/CreateRoundtable";
import { useQuery } from "@apollo/react-hooks";

import { ROUNDTABLES as RTbyUID } from "../../resolvers/queries";

export const Dashboard = () => {
	const { loading, error, data } = useQuery(RTbyUID);
	if (loading) return <h1>LOADING....</h1>;
	if (error) return console.log(error);
	return (
		<>
			<main>
				<article className="myRoundtables">
					{data.roundtablesByUserId.map((table) => {
						return <MyRoundtableList props={table} />;
					})}
					<CreateRoundtable />
				</article>
			</main>
			<article class="edit"></article>
			<div class="close"></div>
		</>
	);
};
