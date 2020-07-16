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
				<h3>
					<span className="message">{description}</span>
				</h3>
				<ul className="stats">
					{members.length === 0 ? (
						<li>Only You</li>
					) : (
						<li>{members.length} Members</li>
					)}
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
							onClick={(e) => enterRoundtable(e, `/roundtable/${id}`)}
						>
							View Issues
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
