import React from "react";
import "./myRoundtableList.css";
import { enterRoundtable, exitRoundtable } from "../../utils";

export const MyRoundtableList = () => {
	document.body.classList.remove('editing');
	return (
		<>
			<main>
				<article className="myRoundtables">
					<section className="table">
						<ul className="roundtable">
							<h5></h5>
							<section>
								<li className="empty">
									<span>
										<span>+ Invite A Friend</span>
									</span>
								</li>
							</section>
						</ul>
						<h2>My First Roundtable</h2>
						<ul className="stats">
							<li>Only You</li>
							<li>
								<strong>No</strong> Issues Published
							</li>
						</ul>
						<h5 className="issue">
							<span className="number">Issue #1</span>
							<span className="title">Hey everyone!</span>
							<span className="status">Gathering Responses</span>
						</h5>
						<ul className="options">
							<li>
								<a className="button new" onClick={(e) => enterRoundtable(e, "/roundtable")}>
									View Responses
								</a>
							</li>
							<li>
								<a className="button notPriority" onClick={(e) => enterRoundtable(e, "/roundtable/edit")} >
									Publish
								</a>
							</li>
						</ul>
					</section>
				</article>
			</main>
			<article class="edit"></article>
			<div class="close"></div>
		</>
	);
};
