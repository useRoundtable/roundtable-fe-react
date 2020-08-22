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
			owner {
				id
			}
			members {
				user {
					id
					userName
				}
			}
			issues {
				title
			}
		}
	}
`;


export const IBR = gql`
	query issuesByRTId($roundtableId: ID!) {
		issuesByRTId(roundtableId: $roundtableId) {
			id
			title
			issueNumber
			prompt
			currentStatus
			issueAuthor{
				id
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
				issueNumber
				prompt
				currentStatus
			}
			owner {
				id
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
			prompt
			issueAuthor {
				id
			}
			questions {
				id
				question
				questionDetail
				questionNumber
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

export const QUESTIONS_BY_ISSUE = gql`
	query questionByIssue($id: ID!) {
		issueById(id: $id) {
			questions {
				id
				question
				questionDetail
				questionNumber
				responses {
					content
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

export const LOGGEDINUSER = gql`
	query loggedInUser {
		loggedInUser {
			userName
			id
			roundtables {
				roundtableName
			}
			memberOf {
				roundtable {
					roundtableName
				}
			}
		}
	}
`;

export const CREATE_ISSUE = gql`
	query issueById($id: ID!){
		issueById(id: $id){
			title
			prompt
			currentStatus
			questions{
				question
				questionDetail
			}
			issueAuthor{
				id
			}
		}
	}
`;

// questionDetail <--------- ADD THIS TO THE RESPONSE LATER
export const QUESTIONSBYISSUEID = gql`
	query questionsByIssueId($issueId: ID!) {
		questionsByIssueId(issueId: $issueId) {
			question
		}
	}
`;
