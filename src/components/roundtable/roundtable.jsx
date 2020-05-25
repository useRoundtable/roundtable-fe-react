import React from "react";
import { NavBar } from "../navigation/NavBar";
import "./roundtable.css";

export const Roundtable = () => {
	return (
		<div class="editing">
			<NavBar />
			<article class="edit show">
				<header>
					<h2>Advisors</h2>
					<a class="close" href="dash.html">
						<span>&times;</span>
					</a>
				</header>
				<nav>
					<ul class="stats">
						<li class="members">
							<ul class="members">
								<li>
									<img src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg" />
								</li>
								<li>
									<img src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png" />
								</li>
								<li>
									<img src="https://pbs.twimg.com/profile_images/524398486536474624/T_aUvkHo_400x400.jpeg" />
								</li>
								<li>
									<img src="https://pbs.twimg.com/profile_images/761998841117683712/janWwuyI_400x400.jpg" />
								</li>
								<li>
									<img src="https://pbs.twimg.com/profile_images/898262358476414977/Xletgru4_400x400.jpg" />
								</li>
								<li>
									<img src="https://pbs.twimg.com/profile_images/1925156946/tbrooks_400x400.jpg" />
								</li>
								<li>
									<img src="https://pbs.twimg.com/profile_images/556233917359853569/vvsGGZxc_400x400.jpeg" />
								</li>
							</ul>
							10 Members
						</li>
						<li class="issues">6 issues</li>
					</ul>
				</nav>
				<section>
					<h4>Issue 7</h4>
					<h2>Title</h2>
					<ul>
						<h3>Questions</h3>
						<li>
							<h4>Question 1</h4>
						</li>
					</ul>
				</section>
			</article>
			<div class="close">
				<a href="/dashboard"></a>
			</div>
		</div>
	);
};
