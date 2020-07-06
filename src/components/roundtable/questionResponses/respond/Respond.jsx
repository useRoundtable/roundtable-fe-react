import React from "react";

export const Respond = () => {
	return (
		<>
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
		</>
	);
};
