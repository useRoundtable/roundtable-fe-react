import React from "react";
import { NavBar } from "../navigation/NavBar";
import { MyRoundtableList } from "../myRoundtableList/MyRoundtableList";

export const Dashboard = () => {
	return (
		<>
			<NavBar />
			<MyRoundtableList />
		</>
	);
};
