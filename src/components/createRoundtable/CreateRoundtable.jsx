import React from "react";
import { enterRoundtable } from "../../utils";

export const CreateRoundtable = () => {
	document.body.classList.remove("editing");
	return (
		<>
			<section className="table createNew">
				<form>
					<label for=""></label>
					<input id="newRoundtableName" type="text" placeholder="" required="required" />
					<label for="newRoundtableName"></label>
					<h2>New Roundtable</h2>
					<textarea id="newRoundtableDescription" placeholder="Description of your roundtable..."></textarea> 
					<ul className="stats">
						<li>Get Started</li>
					</ul>
					<ul className="roundtable">
						<h5></h5>
						<section>
						</section>
					</ul>
				</form>
			</section>
			<article className="edit"></article>
			<div className="close"></div>
		</>
	);
};
