import React from "react";
import { NavBar } from "../navigation/NavBar";
import { MyRoundtableList } from "../myRoundtableList/MyRoundtableList";
import { useQuery } from "@apollo/react-hooks";

import { USERS as userData } from "../../resolvers/queries";

export const Dashboard = () => {
	const { loading, error, data } = useQuery(userData);
	
	if (loading) return <h1>LOADING....</h1>;
	if (error) return console.log(error), null;
	return (
		<>
			<NavBar />
			<MyRoundtableList />
		</>
	);
};
