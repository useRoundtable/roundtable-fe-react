import React from "react";
import { NavBar } from "../navigation/NavBar";
import { MyRoundtableList } from "../myRoundtableList/MyRoundtableList";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const USERS = gql`
	{
		users {
			id
			email
			firstName
			lastName
		}
	}
`;

export const Dashboard = () => {
	const { loading, error, data } = useQuery(USERS);

	if (loading) return <h1>LOADING....</h1>;
	if (error) return { error };
	return (
		<>
			<NavBar />
			<MyRoundtableList />
		</>
	);
};
