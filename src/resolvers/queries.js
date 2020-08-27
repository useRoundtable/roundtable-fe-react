import { gql } from "@apollo/client";

export const ROUNDTABLES = gql`
	query roundtablesByUserId {
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
			prompt
			currentStatus
			issueAuthor {
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
	query issueById($id: ID!) {
		issueById(id: $id) {
			title
			prompt
			currentStatus
			questions {
				question
				questionDetail
			}
			issueAuthor {
				id
				firstName
				lastName
			}
		}
	}
`;

export const ISSUE_RESPONSES = gql`
	query responsesByIssue($issueId: ID!) {
		responsesByIssue(issueId: $issueId) {
			responseAuthor {
				firstName
				lastName
				userName
				avatar
			}
		}
	}
`;

// Replace above query with Commented out Query once BE is updated-
// export const ISSUE_RESPONSES = gql`
// 	query responsesByIssue($issueId: ID!) {
// 		responseAuthor(issueId: $issueId) {
// 			firstName
// 			lastName
// 			userName
// 			avatar
// 		}
// 	}
// `;

// questionDetail <--------- ADD THIS TO THE RESPONSE LATER
export const QUESTIONSBYISSUEID = gql`
	query questionsByIssueId($issueId: ID!) {
		questionsByIssueId(issueId: $issueId) {
			question
		}
	}
`;
