import React from "react";

import { useMutation } from "@apollo/client";
import { DELETE_ROUNDTABLE as deleteRoundtable } from "../../resolvers/mutations";
import { ROUNDTABLES as RTbyUID } from "../../resolvers/queries";

export const DeleteModal = ({
	setIsOpen,
	roundtableId,
	setOpenModal,
	rtName,
}) => {
	const [deleteRT] = useMutation(deleteRoundtable);
	console.log(roundtableId);
	return (
		<>
			<h2>Are you sure you want to delete "{rtName}"?</h2>
			<input />
			<button
				onClick={() => {
					deleteRT({
						variables: { id: roundtableId },
						refetchQueries: [{ query: RTbyUID }],
					});
				}}
			>
				Yes Delete
			</button>
			<a
				onClick={() => {
					setIsOpen(false);
					setOpenModal("");
				}}
			>
				No
			</a>
		</>
	);
};
