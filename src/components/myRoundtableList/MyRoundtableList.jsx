import React from "react";
import "./myRoundtableList.css";
import { enterRoundtable } from "../../utils";
import { RTAnimation } from "../animation/roundtableAni";

export const MyRoundtableList = ({
	props: { roundtableName, description, members, id },
}) => {
	document.body.classList.remove("editing");
	return (
		<>
			<section className="table">
				<RTAnimation members={members} />
				<h2>{roundtableName}</h2>
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
						<a
							className="button new"
							onClick={(e) => enterRoundtable(e, "/roundtable")}
						>
							View Responses
						</a>
					</li>
					<li>
						<a
							className="button notPriority"
							onClick={(e) => enterRoundtable(e, "/roundtable/edit")}
						>
							Publish
						</a>
					</li>
				</ul>
			</section>
		</>
	);
};
