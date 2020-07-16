import React from "react";

import { CreateIssueQuestion } from "./createIssueQuestion/CreateIssueQuestion";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CreateIssue = () => {
	return (
		<section className="issue new">
			<article class="issueHeader">
				<h3 class="issue">
					<span class="number">Issue #2</span>
					<span class="status"></span>
					<span class="title">The music minute?!</span>
				</h3>
			</article>
			<ReactQuill theme="snow" />
			<article className="questionList">
				<ul className="questionList">
					<h6 className="questionListHeader">
						Collect responses for&hellip;until July 17, 2020.
					</h6>
					<li>1 day</li>
					<li>2 days</li>
					<li>3 days</li>
					<li className="done">4 days</li>
					<li>5 days</li>
					<li>6 days</li>
					<li>1 week</li>
				</ul>
			</article>
			<CreateIssueQuestion />
		</section>
	);
};
