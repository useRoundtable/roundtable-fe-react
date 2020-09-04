import { parseToken } from "./jwt";

import { set, get, remove, clear } from "./storageWrapper";

const USER_KEY = "authorization";

export const setUser = (token) => {
	set(USER_KEY, token);
};

export const removeUser = () => {
	remove(USER_KEY);
};

export const getUser = () => {
	try {
		const token = get(USER_KEY);

		if (!token) return {};
		const { id, isAdmin } = parseToken(token);
		return { id, token };
	} catch (err) {
		removeUser();
		return {};
	}
};

export const logOut = () => {
	clear();
};
