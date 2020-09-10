import React, { useState } from "react";

import { useParams } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { CREATE_RESPONSE as createResponse } from "../../../../resolvers/mutations";

import { getUser } from "../../../../auth";
import { RenderMarkdown } from "../../../universalComponents/RenderMarkdown";
import { TextField } from "../../../textFields/TextField";

import { ListDisplay } from "../../../memberList/ListDisplay";

// I will HAVE to update the onClick to remove it from the whole element.
export const QuestionCard = ({
	data,
	qNumber,
	setIsEditing,
	isResponding,
	setIsResponding,
	QBIID,
}) => {
	const [inputValue, setInputValue] = useState("");
	const { roundtableId, issueid } = useParams();
	const { id } = getUser();

	const [response] = useMutation(createResponse, {
		onCompleted({ createResponse }) {
			setIsResponding(0);
		},
	});
	console.log("DATA IN QUESTION CARD", data);
	return (
		<article className="question">
			<div
				className="questionContent"
				onClick={() => {
					window.location.assign(
						`/roundtable/${roundtableId}/issue/${issueid}/question/${data.id}`
					);
				}}
			>
				<h6 className="questionNumber">Question {qNumber}</h6>
				<h4 className="question">{data.question}</h4>
				<RenderMarkdown source={data.questionDetail} />
			</div>
			{isResponding === true ? (
				<TextField inputValue={inputValue} setInputValue={setInputValue} />
			) : (
				""
			)}
			<ul className="stats">
				{data.responses.length === 0 ? (
					<li className="members">
						Awaiting Responses
						<ul className="members waiting">
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</li>
				) : (
					<li
						className="members"
						onClick={() => {
							window.location.assign(
								`/roundtable/${roundtableId}/issue/${issueid}/question/${data.id}`
							);
						}}
					>
						{data.responses.length} Responses
						<ul className="members">
							<li>
								{data.responses.map((response) => {
									return (
										<ListDisplay info={response.responseAuthor} />
									);
								})}
							</li>
						</ul>
					</li>
				)}

				<li className="kudos">&hearts; 275</li>
				{id === parseInt(data.author.id) ? (
					<>
						<li
							onClick={() => {
								setIsEditing(qNumber);
							}}
						>
							Edit
						</li>
						{isResponding === true ? (
							<li
								onClick={() => {
									response({
										variables: {
											content: inputValue,
											question: data.id,
										},
										refetchQueries: [
											{
												query: QBIID,
												variables: {
													id: issueid,
												},
											},
										],
									});
								}}
							>
								Save Response
							</li>
						) : (
							<li
								onClick={() => {
									setIsResponding(qNumber);
								}}
							>
								Respond
							</li>
						)}
					</>
				) : isResponding === true ? (
					<li
						onClick={() => {
							response({
								variables: {
									content: inputValue,
									question: data.id,
								},
								refetchQueries: [
									{
										query: QBIID,
										variables: {
											id: issueid,
										},
									},
								],
							});
						}}
					>
						Save Response
					</li>
				) : (
					<li
						onClick={() => {
							setIsResponding(qNumber);
						}}
					>
						Respond
					</li>
				)}
			</ul>
		</article>
	);
};
