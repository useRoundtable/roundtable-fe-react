import React from "react";
import "./newRoundtable.css";

export const NewRoundtable = () => {
	return (
		<>
			<section className="table">
				<ul className="roundtable">
					<section>
						<li className="empty">
							<span>
								<span>+ Invite A Friend</span>
							</span>
						</li>
					</section>
				</ul>
				<h2>Create a new Roundtable</h2>
				<ul className="stats">
					<li>Get Started</li>
				</ul>
			</section>
		</>
	);
};
