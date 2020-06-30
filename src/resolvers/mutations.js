import { gql } from "apollo-boost";

export const LOGIN = gql`
	mutation Login($email: String!, $password: String) {
		login(email: $email, password: $password) {
			token
		}
	}
`;

export const REGISTER = gql`
	mutation createUser(
		$email: String!
		$password: String
		$firstName: String
		$lastName: String
		$userName: String
	) {
		createUser(
			data: {
				email: $email
				firstName: $firstName
				lastName: $lastName
				userName: $userName
				password: $password
			}
		) {
			token
		}
	}
`;

export const CREATE_RT = gql`
	mutation CreateRoundTable($roundtableName: String!, $description: String) {
		createRoundtable(
			roundtableName: $roundtableName
			description: $description
		) {
			roundtableName
		}
	}
`;
