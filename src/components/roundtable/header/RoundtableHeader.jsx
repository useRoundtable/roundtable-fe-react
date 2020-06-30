import React from "react";
import { exitRoundtable } from "../../../utils";
import { Link } from "react-router-dom";

export const RoundtableHeader = () => {
	return (
		<>
			<header>
				<h2>Advisors</h2>
				<a
					className="close"
					onClick={(e) => exitRoundtable(e, "/dashboard")}
				>
					<span>&times;</span>
				</a>
			</header>
			<nav>
				<ul className="stats">
					<li
						className="members"
						onClick={() => {
							window.location.assign("/roundtable/members");
						}}
					>
						<ul className="members">
							<li>
								<em>SK</em>
								{/*<img
                            alt="avatar"
                            src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg"
                        />*/}
							</li>
							<li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png"
								/>
							</li>
							<li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/524398486536474624/T_aUvkHo_400x400.jpeg"
								/>
							</li>
							<li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/761998841117683712/janWwuyI_400x400.jpg"
								/>
							</li>
							<li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/898262358476414977/Xletgru4_400x400.jpg"
								/>
							</li>
							<li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/1925156946/tbrooks_400x400.jpg"
								/>
							</li>
							<li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/556233917359853569/vvsGGZxc_400x400.jpeg"
								/>
							</li>
						</ul>
						10 Members
					</li>
					<li
						className="issues"
						onClick={() => {
							window.location.assign("/roundtable/");
						}}
					>
						6 issues
					</li>
					<li
						className="responses new"
						onClick={() => {
							window.location.assign("/roundtable/responses");
						}}
					>
						32 New Responses
					</li>
				</ul>
			</nav>
		</>
	);
};
