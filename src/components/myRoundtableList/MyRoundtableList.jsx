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
					<span className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id efficitur nunc. Vivamus ac mauris rhoncus, iaculis nisl ut, gravida diam. Nunc molestie tortor nulla, non feugiat diam dictum nec. Phasellus a nisl lobortis, mattis ante ac, porttitor velit. Fusce ultricies pellentesque erat, ac porttitor quam tristique eu. Cras a lectus fermentum, vulputate mi nec, faucibus odio. Donec laoreet turpis sit amet magna venenatis varius. </span>
				</h3>
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
							onClick={(e) => enterRoundtable(e, `/roundtable/${id}`)}
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
