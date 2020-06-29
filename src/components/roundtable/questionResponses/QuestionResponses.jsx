import React from "react";

export const QuestionResponses = () => {
	return (
		<section className="issue answer">
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
						<ul className="members">
							<li>
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png"
								/>
							</li>
						</ul>
						Tony K.
					</li>
					<li className="textCount noHover noRemaining">
						<em>255</em> / 255
					</li>
				</ul>
				<textarea
					required
					type="text"
					placeholder="We'll replace this with markdown field"
				></textarea>
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
								<img
									alt="avatar"
									src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png"
								/>
							</li>
						</ul>
						Tony K.
					</li>
					<li className="textCount noHover">
						<em>25</em> / 255
					</li>
				</ul>
				<textarea
					required
					type="text"
					placeholder="We'll replace this with markdown field"
				></textarea>
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
						</ul>
						Tony K.
					</li>
					<li className="textCount noHover">
						<em>0</em> / 255
					</li>
				</ul>
				<textarea
					required
					type="text"
					placeholder="We'll replace this with markdown field"
				></textarea>
			</article>
			<article className="question submit">
				<ul class="options textCenter">
					<li>
						<a class="button big" href="javascript:void(0)">
							Submit my answers
						</a>
					</li>
				</ul>
			</article>
		</section>
	);
};
