import React from "react";
import { enterRoundtable } from "../../utils";

export const CreateRoundtable = () => {
	document.body.classList.remove("editing");
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
				<h2>Start your new Roundtable</h2>
				<ul className="stats">
					<li>Only You</li>
					<li>
						<strong>3</strong> Issues Published
					</li>
				</ul>
				{/* <h5 className="issue">
					<span className="number">Issue #1</span>
					<span className="title">Hey everyone!</span>
					<span className="status">Gathering Responses</span>
				</h5> */}
				<ul className="options">
					<li>
						<a
							className="button new"
							onClick={(e) => enterRoundtable(e, "/new")}
						>
							Create
						</a>
					</li>
				</ul>
			</section>
			<article class="edit"></article>
			<div class="close"></div>
		</>
	);
};
