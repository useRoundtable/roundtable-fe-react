import React from "react";

export const QuestionCard = ({ data, qNumber }) => {
	console.log("QUESTION IN CARD", data, qNumber);
	return (
		<article className="question">
			<div className="questionContent">
				<h6 className="questionNumber">Question {qNumber}</h6>
				<h4 className="question">{data.question}</h4>
				<p>
					QUESTION PROMPT WILL GO HERE, TONY NEEDS TO ADD THIS ON THE
					BACKEND AS WELL
				</p>
			</div>
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
					<li className="members">
						{data.responses.length} Responses
						<ul className="members">
							<li>
								<em>SK</em>
							</li>
							{/* <li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png"
								/>
							</li> */}
						</ul>
					</li>
				)}

				<li className="kudos">&hearts; 275</li>
			</ul>
		</article>
	);
};

// <article className="question">
// 				<div className="questionContent">
// 					<h6 className="questionNumber">Question 2</h6>
// 					<h4 className="question">
// 						What do you need help with for next week?
// 					</h4>
// 					<p>
// 						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// 						Integer tempor dolor nec lorem pharetra, quis cursus purus
// 						iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing
// 						elit.
// 					</p>
// 					<p>
// 						Fusce a felis at libero mattis scelerisque ac at neque. Aenean
// 						metus augue, tristique iaculis diam eu, commodo facilisis
// 						lectus. Class aptent taciti sociosqu ad litora torquent per
// 						conubia nostra, per inceptos himenaeos. Pellentesque vehicula
// 						massa a massa tempus, sit amet vestibulum nisl vestibulum.
// 					</p>
// 				</div>
// 				<ul className="stats">
// 					<li className="members">
// 						<ul className="members">
// 							<li>
// 								<em>SK</em>
// 							</li>
// 							<li>
// 								<img
// 									alt="avatar"
// 									src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png"
// 								/>
// 							</li>
// 							<li>
// 								<img
// 									alt="avatar"
// 									src="https://pbs.twimg.com/profile_images/524398486536474624/T_aUvkHo_400x400.jpeg"
// 								/>
// 							</li>
// 							<li>
// 								<img
// 									alt="avatar"
// 									src="https://pbs.twimg.com/profile_images/761998841117683712/janWwuyI_400x400.jpg"
// 								/>
// 							</li>
// 							<li>
// 								<img
// 									alt="avatar"
// 									src="https://pbs.twimg.com/profile_images/898262358476414977/Xletgru4_400x400.jpg"
// 								/>
// 							</li>
// 							<li>
// 								<img
// 									alt="avatar"
// 									src="https://pbs.twimg.com/profile_images/1925156946/tbrooks_400x400.jpg"
// 								/>
// 							</li>
// 							<li>
// 								<img
// 									alt="avatar"
// 									src="https://pbs.twimg.com/profile_images/556233917359853569/vvsGGZxc_400x400.jpeg"
// 								/>
// 							</li>
// 							<li>
// 								<em>10</em>
// 							</li>
// 						</ul>
// 						10 Responses
// 					</li>
// 					<li className="kudos">&hearts; 275</li>
// 				</ul>
// 			</article>
