import { gql } from "@apollo/client";

export const LOGGED_IN_USER = gql`
	query loggedInUser {
		loggedInUser {
			avatar
			firstName
			lastName
			userName
		}
	}
`;

export const ROUNDTABLE_INVITE = gql`
	query roundtableById($id: ID!) {
		roundtableById(id: $id) {
			roundtableName
			owner {
				userName
			}
			members {
				id
			}
			issues {
				id
			}
		}
	}
`;

export const ROUNDTABLES = gql`
	query roundtablesByUserId {
		roundtablesByUserId {
			id
			createdAt
			roundtableName
			description
			owner {
				id
				userName
			}
			members {
				user {
					id
					userName
				}
			}
			issues {
				id
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
			issueKudos
			publishedAt
			publishDate
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
			}
			owner {
				id
			}
			members {
				user {
					avatar
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
			currentStatus
			publishedAt
			publishDate
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
						avatar
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
				author {
					id
				}
				id
				question
				questionDetail
				responses {
					content
					responseAuthor {
						id
						userName
						firstName
						lastName
						avatar
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

export const NAVBAR_USER = gql`
	query loggedInUser {
		loggedInUser {
			userName
			firstName
			lastName
			id
			email
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
				userName
				avatar
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

export const RESPONSES_BY_QUESTION = gql`
	query questionById($id: ID!) {
		questionById(id: $id) {
			id
			question
			questionDetail
			author {
				id
			}
			responses {
				content
				kudos
				createdAt
				responseAuthor {
					userName
					firstName
					lastName
					avatar
					id
				}
			}
		}
	}
`;

export const UNIQUE_RESPONDERS = gql`
	query uniqueResponders($id: ID!) {
		uniqueResponders(id: $id) {
			responseAuthor {
				userName
				firstName
				lastName
				avatar
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
