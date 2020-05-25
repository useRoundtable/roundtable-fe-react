import React from "react";

export const Home = () => {
	return (
		<div>
			<div>
				<nav class="light">
					<ul>
						<li>
							<a href="dash.html">
								<h6>Dashboard</h6>
							</a>
						</li>
						<li>
							<a href="login.html">
								<h6>Login</h6>
							</a>
						</li>
					</ul>
				</nav>
				<form>
					<ul className="roundtable">
						<section>
							<li>
								<span>
									<span>Steven Kovar</span>
								</span>
							</li>
							<li>
								<span>
									<span>Tony Kovar</span>
								</span>
							</li>
							<li>
								<span>
									<span>You</span>
								</span>
							</li>
						</section>
					</ul>
					<h3>Assemble your roundtable.</h3>
					{/* <!-- <h3>Keep up<br> with your<br> coworkers.</h3>
			<h3>Coordinate<br> with your<br> friends.</h3>
			<h3>Grow<br> with your<br> mastermind group.</h3>
			<h3>Share<br> with your<br> followers.</h3> --> */}
					<p>
						Roundtable helps small groups stay on top of things with
						simple two-way newsletters.
					</p>
				</form>
			</div>
			<figure>
				<nav>
					<ul>
						<li class="selected">
							<a href="onboard.html">
								<h6>Join</h6>
							</a>
						</li>
						<li>
							<a href="explore.html">
								<h6>Explore</h6>
							</a>
						</li>
						<li>
							<a href="price.html">
								<h6>Price</h6>
							</a>
						</li>
					</ul>
				</nav>
			</figure>
		</div>
	);
};
