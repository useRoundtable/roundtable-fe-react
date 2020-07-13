import React from "react";

export const QuestionResponses = () => {
	return (
		<section className="issue">
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
		</section>
	);
};
