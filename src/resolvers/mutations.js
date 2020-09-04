import { gql } from "@apollo/client";

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
	mutation CreateIssue(
		$roundtable: ID!
		$title: String!
		$prompt: String
		$currentStatus: String!
	) {
		createIssue(
			roundtable: $roundtable
			title: $title
			prompt: $prompt
			currentStatus: $currentStatus
		) {
			title
			id
		}
	}
`;

// Come back and add currentStatus when you update your BE schema.
export const UPDATE_ISSUE = gql`
	mutation updateIssue($title: String!, $prompt: String, $id: ID!) {
		updateIssue(title: $title, prompt: $prompt, id: $id) {
			id
		}
	}
`;
//Add Detail to Questions when it is live on the DB
// $detail: String!
export const ADD_QUESTIOM = gql`
	mutation createQuestion(
		$question: String!
		$issue: ID!
		$questionDetail: String
	) {
		createQuestion(
			question: $question
			issue: $issue
			questionDetail: $questionDetail
		) {
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

export const DELETE_ISSUE = gql`
	mutation($id: ID!) {
		deleteIssue(id: $id) {
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

export const UPDATE_USER = gql`
	mutation updateUser($data: UserInput!, $id: ID!) {
		updateUser(data: $data, id: $id) {
			userName
			firstName
			lastName
			id
			email
		}
	}
`;

export const JOIN_ROUNDTABLE = gql`
	mutation createMember($roundtable: ID!, $user: ID!) {
		createMember(roundtable: $roundtable, user: $user) {
			id
		}
	}
`;

export const INVITE_MEMBER = gql`
	mutation inviteMember(
		$roundtableId: ID!
		$email: String!
		$owner: String!
		$invite: String!
		$roundtableName: String!
	) {
		inviteMember(
			roundtableName: $roundtableName
			email: $email
			roundtableId: $roundtableId
			invite: $invite
			owner: $owner
		) {
			response
		}
	}
`;
