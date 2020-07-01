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
