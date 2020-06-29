import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import "./roundtable.css";
import { RoundtableHeader } from "./header/RoundtableHeader";
import { IssueView } from "./issueView/IssueView";
import { QuestionResponses } from "./questionResponses/QuestionResponses";
import { IssueList } from "./issueList/IssueList";
import { MemberView } from "./members/MemberView";

export const Roundtable = () => {
	document.body.classList.add("editing");
	const { path } = useRouteMatch();
	return (
		<>
			<article className="edit show">
				<RoundtableHeader />
				<div className="content">
					<Switch>
						<Route path={`${path}/issue/`} component={IssueView} />
						<Route
							path={`${path}/responses`}
							component={QuestionResponses}
						/>
						<Route exact path={`${path}/`} component={IssueList} />
						<Route path={`${path}/members`} component={MemberView} />
						{/* <section className="issueCreate">
							<h4>
								<em>.issueCreate</em>
							</h4>
							<h2>Title</h2>
							<ul>
								<h3>Questions</h3>
								<li>
									<h4>Question 1</h4>
								</li>
							</ul>
						</section> */}
						{/* <IssueView /> */}
						{/* <QuestionResponses /> */}

						{/* <IssueList /> */}

						{/* <MemberView /> */}
					</Switch>
				</div>
			</article>
			<div className="close">
				<a href="javascript:void(0)"></a>
			</div>
		</>
	);
};
