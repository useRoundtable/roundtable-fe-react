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
				{/*<h5 className="issue">
					<span className="number">Issue #1</span>
					<span className="title">Hey everyone!</span>
					<span className="status">Gathering Responses</span>
				</h5>
				<ul className="options">
					<li>
						<a
							className="button new"
							
						>
							Start a new roundtable
						</a>
					</li>
				</ul>*/}
			</section>
		</>
	);
};
