import React, { useState } from "react";

import { Login } from "./Login";
import { Join } from "../home/homeContent/join/Join";

export const LoginRender = ({ redirectTo }) => {
	const [isRegistering, setIsRegistering] = useState(false);
	if (isRegistering) {
		return (
			<Join
				setIsRegistering={setIsRegistering}
				redirectTo={window.location.pathname}
			/>
		);
	} else {
		return (
			<Login setIsRegistering={setIsRegistering} redirectTo={redirectTo} />
		);
	}
};
