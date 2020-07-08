import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";

import "./roundtable.css";
import { RoundtableHeader } from "./header/RoundtableHeader";
import { IssueView } from "./issueView/IssueView";
import { QuestionResponses } from "./questionResponses/QuestionResponses";
import { Respond } from "./questionResponses/respond/Respond";
import { IssueList } from "./issueList/IssueList";
import { MemberView } from "./members/MemberView";

import { ROUNDTABLE as RTbyID } from "../../resolvers/queries";

export const Roundtable = () => {
	document.body.classList.add("editing");
	const { path } = useRouteMatch();
	const { id } = useParams();

	const { loading, error, data } = useQuery(RTbyID, {
		variables: { id },
	});
	if (loading) {
		return <article className="edit show"></article>;
	} else if (error) {
		console.log(error);
		return <h2>error</h2>;
	}
	return (
		<>
			<article className="edit show">
				<RoundtableHeader />
				<div className="content">
					<Switch>
						<Route
							exact
							path={`${path}`}
							render={(props) => (
								<IssueList data={data.roundtableById.issues} />
							)}
						/>
						<Route
							exact
							path={`${path}/issue/:issueid`}
							component={IssueView}
						/>
						<Route
							exact
							path={`${path}/issue/:issueid/respond`}
							component={Respond}
						/>
						<Route
							exact
							path={`${path}/issue/:issueid/question/:questionid`}
							component={QuestionResponses}
						/>
						<Route path={`${path}/members`} component={MemberView} />
					</Switch>
				</div>
			</article>
			<div className="close">
				<a href="javascript:void(0)"></a>
			</div>
		</>
	);
};
