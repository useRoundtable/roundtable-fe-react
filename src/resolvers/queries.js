import { gql } from "apollo-boost";

export const USERS = gql`
	{
		users {
			id
			email
			firstName
			lastName
		}
	}
`;

export const ROUNDTABLES = gql`
	{
		roundtablesByUserId {
			id
			createdAt
			roundtableName
			description
			members {
				user {
					id
					userName
				}
			}
		}
	}
`;

export const ROUNDTABLE = gql`
	query roundtableById($id: ID!) {
		roundtableById(id: $id) {
			roundtableName
			issues {
				id
				title
			}
			members {
				user {
					userName
					firstName
					lastName
					id
				}
			}
		}
	}
`;

export const ISSUEBYID = gql`
	query issueById($id: ID!) {
		issueById(id: $id) {
			title
			issueAuthor {
				userName
			}
			questions {
				id
				question
				responses {
					content
					responseAuthor {
						userName
					}
				}
			}
		}
	}
`;

export const RESPONSESBYQANDID = gql`
	query responseByQandId($questionId: ID!) {
		responseByQandId(questionId: $questionId) {
			content
		}
	}
`;
