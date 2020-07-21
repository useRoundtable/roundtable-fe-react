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

export const CREATE_ISSUE = gql`
	mutation CreateIssue($roundtable: ID!, $title: String!, $prompt: String) {
		createIssue(roundtable: $roundtable, title: $title, prompt: $prompt) {
			title
			id
		}
	}
`;
//Add Detail to Questions when it is live on the DB
// $detail: String!
export const ADD_QUESTIOM = gql`
	mutation createQuestion($question: String!, $issue: ID!) {
		createQuestion(question: $question, issue: $issue) {
			question
		}
	}
`;

export const DELETE_ROUNDTABLE = gql`
	mutation deleteRoundtable($id: ID!) {
		deleteRoundtable(id: $id) {
			id
		}
	}
`;

export const CREATE_RESPONSE = gql`
	mutation createResponse($content: String!, $question: ID!) {
		createResponse(content: $content, question: $question) {
			content
		}
	}
`;
