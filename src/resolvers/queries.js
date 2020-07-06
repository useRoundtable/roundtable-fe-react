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
				title
			}
			members {
				user {
					userName
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

// export const QUESTIONSBYISSUEID = qgl`
// query questionsByIssueId($id: ID!){
// 	questionsByIssueId(id: $id){

// 	}
// }
// `
