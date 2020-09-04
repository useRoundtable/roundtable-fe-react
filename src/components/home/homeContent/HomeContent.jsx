import React from "react";

import { Join } from "./join/Join";
import { Explore } from "./explore/Explore";
import { Price } from "./price/Price";

export const HomeContent = ({ display }) => {
	if (display === "pricing") {
		return <Price />;
	} else if (display === "explore") {
		return <Explore />;
	} else {
		return <Join redirectTo={"/dashboard"} />;
	}
};
