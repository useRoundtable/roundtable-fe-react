import React from "react";

export const IssueView = () => {
	return (
		<section className="issue view">
			<article className="issueHeader">
				<h3 className="issue">
					<span className="number">Issue #4</span>
					<span className="status">June 6, 2020</span>
					<span className="title">Hey everyone!</span>
				</h3>
			</article>
			<article className="message">
				<ul className="stats">
					<li className="members">
						<ul className="members">
							<li>
								<img
									src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg"
									alt="Steven K."
								/>
							</li>
						</ul>
						Steven K. says{" "}
					</li>
				</ul>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
					tempor dolor nec lorem pharetra, quis cursus purus iaculis. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl
					nisl, blandit eget arcu sit amet, euismod molestie mi. Vivamus
					molestie, sem nec lobortis malesuada, risus enim gravida nisi,
					non volutpat dui est nec ante. Fusce a felis at libero mattis
					scelerisque ac at neque. Aenean metus augue, tristique iaculis
					diam eu, commodo facilisis lectus. Class aptent taciti sociosqu
					ad litora torquent per conubia nostra, per inceptos himenaeos.
					Pellentesque vehicula massa a massa tempus, sit amet vestibulum
					nisl vestibulum.
				</p>
			</article>
			<article className="questionList">
				<ul className="questionList">
					<h6 className="questionListHeader">Questions</h6>
					<li>What was your major accomplishment this week?</li>
					<li className="done">
						What do you need help with for next week?
					</li>
					<li>What does it look like with no paragraphs?</li>
				</ul>
				<ul className="options">
					<li>
						<a className="button" href="javascript:void(0)">
							Answer Questions
						</a>
					</li>
					<li>
						<a className="button notPriority" href="javascript:void(0)">
							View Responses
						</a>
					</li>
				</ul>
			</article>
			<article className="question">
				<div className="questionContent">
					<h6 className="questionNumber">Question 1</h6>
					<h4 className="question">
						What was your major accomplishment this week?
					</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Integer tempor dolor nec lorem pharetra, quis cursus purus
						iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit.
					</p>
				</div>
				<ul className="stats">
					<li className="members">
						Awaiting Responses
						<ul className="members waiting">
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</li>
					<li classname="kudos">&hearts; 275</li>
				</ul>
			</article>
			<article className="question">
				<div className="questionContent">
					<h6 className="questionNumber">Question 2</h6>
					<h4 className="question">
						What do you need help with for next week?
					</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Integer tempor dolor nec lorem pharetra, quis cursus purus
						iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit.
					</p>
					<p>
						Fusce a felis at libero mattis scelerisque ac at neque. Aenean
						metus augue, tristique iaculis diam eu, commodo facilisis
						lectus. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. Pellentesque vehicula
						massa a massa tempus, sit amet vestibulum nisl vestibulum.
					</p>
				</div>
				<ul className="stats">
					<li className="members">
						<ul className="members">
							<li>
								<em>SK</em>
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
							<li>
								<em>10</em>
							</li>
						</ul>
						10 Responses
					</li>
					<li classname="kudos">&hearts; 275</li>
				</ul>
			</article>
			<article className="answers header">
				<ul className="stats">
					<li className="noHover">10 Responses</li>
					<li className="sort noHover">
						<ul className="sort">
							<li className="best">Best</li>
							<li className="top selected">Top</li>
							<li className="new">New</li>
						</ul>
					</li>
				</ul>
			</article>
			<article className="answers">
				<section className="answer">
					<div className="answerContent">
						<ul className="kudos">
							<li classname="icon">&hearts;</li>
						</ul>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Integer tempor dolor nec lorem pharetra, quis cursus purus
							iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
						<p>
							Fusce a felis at libero mattis scelerisque ac at neque.
							Aenean metus augue, tristique iaculis diam eu, commodo
							facilisis lectus. Class aptent taciti sociosqu ad litora
							torquent per conubia nostra, per inceptos himenaeos.
							Pellentesque vehicula massa a massa tempus, sit amet
							vestibulum nisl vestibulum.
						</p>
						<ul className="stats">
							<li classname="kudos">&hearts; 200</li>
						</ul>
					</div>
					<div className="carat"></div>
					<ul className="stats">
						<li className="members">
							<ul className="members">
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/524398486536474624/T_aUvkHo_400x400.jpeg"
									/>
								</li>
							</ul>
							Jimena F.
						</li>
						<li className="date noHover">June 2, 2020</li>
					</ul>
				</section>
				<section className="answer">
					<div className="answerContent">
						<ul className="kudos">
							<li classname="icon">&hearts;</li>
						</ul>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Integer tempor dolor nec lorem pharetra, quis cursus purus
							iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Fusce a felis at libero mattis scelerisque ac at
							neque.
						</p>
						<ul className="stats">
							<li classname="kudos">&hearts; 75</li>
						</ul>
					</div>
					<div className="carat"></div>
					<ul className="stats">
						<li className="members">
							<ul className="members">
								<li>
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/761998841117683712/janWwuyI_400x400.jpg"
									/>
								</li>
							</ul>
							Brennan L.
						</li>
						<li className="date noHover">June 3, 2020</li>
					</ul>
				</section>
				<section className="answer">
					<div className="answerContent">
						<ul className="kudos selected">
							<li classname="icon">&hearts;</li>
						</ul>
						<p>
							Fusce a felis at libero mattis scelerisque ac at neque.
							Aenean metus augue, tristique iaculis diam eu, commodo
							facilisis lectus. Class aptent taciti sociosqu ad litora
							torquent per conubia nostra, per inceptos himenaeos.
						</p>
						<p>
							Pellentesque vehicula massa a massa tempus, sit amet
							vestibulum nisl vestibulum.
						</p>
						<ul className="stats">
							<li classname="kudos">&hearts; 0</li>
						</ul>
					</div>
					<div className="carat"></div>
					<ul className="stats">
						<li className="members">
							<ul className="members">
								<li>
									<em>SK</em>
								</li>
							</ul>
							Steven K.
						</li>
						<li className="date noHover">June 1, 2020</li>
					</ul>
				</section>
			</article>
			<article className="question">
				<div className="questionContent">
					<h6 className="questionNumber">Question 3</h6>
					<h4 className="question">
						What does it look like with no paragraphs?
					</h4>
				</div>
				<ul className="stats">
					<li className="members">
						<ul className="members">
							<li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png"
								/>
							</li>
							<li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/761998841117683712/janWwuyI_400x400.jpg"
								/>
							</li>
							<li>
								<em>SK</em>
							</li>
							<li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/524398486536474624/T_aUvkHo_400x400.jpeg"
								/>
							</li>
						</ul>
						4 Responses
					</li>
					<li classname="kudos">&hearts; 275</li>
				</ul>
			</article>
		</section>
	);
};
