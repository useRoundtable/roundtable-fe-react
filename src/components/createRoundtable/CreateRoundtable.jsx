import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { enterRoundtable } from "../../utils";

import { ROUNDTABLES as RTbyUID } from "@resolvers/queries";

import { CREATE_RT as newRoundtable } from "@resolvers/mutations";

export const CreateRoundtable = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const [createRT, { loading }] = useMutation(newRoundtable);

	document.body.classList.remove("editing");
	return (
		<>
			<section className="table createNew">
				<form
					onKeyPress={(event) => {
						if (event.key === "Enter") {
							createRT({
								variables: { description, roundtableName: title },
								refetchQueries: [{ query: RTbyUID }],
							});
						}
					}}
				>
					<label for=""></label>
					<input
						id="newRoundtableName"
						type="text"
						placeholder=""
						required="required"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<label for="newRoundtableName"></label>
					<h2>New Roundtable</h2>
					<textarea
						id="newRoundtableDescription"
						placeholder="Description of your roundtable..."
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
					<ul className="stats">
						<li>Get Started</li>
					</ul>
					<ul className="roundtable">
						<h5
							onClick={() => {
								createRT({
									variables: { description, roundtableName: title },
									refetchQueries: [{ query: RTbyUID }],
								});
							}}
						></h5>
						<section></section>
					</ul>
				</form>
			</section>
			<article className="edit"></article>
			<div className="close"></div>
		</>
	);
};
