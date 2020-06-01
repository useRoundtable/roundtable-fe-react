import React from "react";
import { NavBar } from "../navigation/NavBar";
import "./roundtable.css";
import { enterRoundtable, exitRoundtable } from "../../utils";

export const Roundtable = () => {
	document.body.classList.add('editing');
	return (
		<>
			<NavBar />
			<article class="edit show">
				<header>
					<h2>Advisors</h2>
					<a class="close" onClick={(e) => exitRoundtable(e, "/dashboard")}>
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
				<div class="content">
					<section class="members">
						<h4>10 Members <em>.memberList</em></h4>
						<ul class="memberList">
							<li>
								<span class="avatar"><img src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg" /></span>
								<h4>Steven K.</h4>
								<a class="button">View Profile</a>
								<div class="stats">
									<span>2,572</span>
									<span class="active">Active</span>
								</div>
							</li>
							<li>
								<span class="avatar"><img src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png" /></span>
								<h4>Tony K.</h4>
								<a class="button">View Profile</a>
								<div class="stats">
									<span>2,572</span>
									<span class="active">Active</span>
								</div>
							</li>
							<li>
								<span class="avatar"><img src="https://pbs.twimg.com/profile_images/524398486536474624/T_aUvkHo_400x400.jpeg" /></span>
								<h4>Jimena F.</h4>
								<a class="button new">New Responses</a>
								<div class="stats">
									<span>2,572</span>
									<span class="inactive">Inactive</span>
								</div>
							</li>
							<li>
								<span class="avatar"><img src="https://pbs.twimg.com/profile_images/761998841117683712/janWwuyI_400x400.jpg" /></span>
								<h4>Brennan L.</h4>
								<a class="button">View Profile</a>
								<div class="stats">
									<span>2,572</span>
									<span class="active">Active</span>
								</div>
							</li>
							<li>
								<span class="avatar"><img src="https://pbs.twimg.com/profile_images/898262358476414977/Xletgru4_400x400.jpg" /></span>
								<h4>Brandon C.</h4>
								<a class="button new">Just Joined</a>
								<div class="stats">
									<span>2,572</span>
									<span class="inactive">Inactive</span>
								</div>
							</li>
							<li>
								<span class="avatar"><img src="https://pbs.twimg.com/profile_images/1925156946/tbrooks_400x400.jpg" /></span>
								<h4>Taylor B.</h4>
								<a class="button">View Profile</a>
								<div class="stats">
									<span>2,572</span>
									<span class="inactive">Inactive</span>
								</div>
							</li>
							<li>
								<span class="avatar"><img src="https://pbs.twimg.com/profile_images/556233917359853569/vvsGGZxc_400x400.jpeg" /></span>
								<h4>Trey T.</h4>
								<a class="button">View Profile</a>
								<div class="stats">
									<span>2,572</span>
									<span class="active">Active</span>
								</div>
							</li>	
							<li class="invited">
								<span class="avatar"></span>
								<h4>Philip M.</h4>
								<a class="button">Invited</a>
							</li>
							<li class="invited">
								<span class="avatar"></span>
								<h4>Steven Michael Kovar</h4>
								<a class="button">Invited</a>
							</li>
						</ul>
					</section>
					<section class="issueList">
						<h4>6 Issues <em>.issueList</em></h4>
						<h2>Title</h2>
						<ul>
							<h3>Questions</h3>
							<li>
								<h4>Question 1</h4>
							</li>
						</ul>
					</section>
					<section class="issueCreate">
						<h4><em>.issueCreate</em></h4>
						<h2>Title</h2>
						<ul>
							<h3>Questions</h3>
							<li>
								<h4>Question 1</h4>
							</li>
						</ul>
					</section>
					<section class="issueRespond">
						<h4><em>.issueRespond</em></h4>
						<h2>Title</h2>
						<ul>
							<h3>Questions</h3>
							<li>
								<h4>Question 1</h4>
							</li>
						</ul>
					</section>
					<section class="issueView">
						<h4><em>.issueView</em></h4>
						<h2>Title</h2>
						<ul>
							<h3>Questions</h3>
							<li>
								<h4>Question 1</h4>
							</li>
						</ul>
					</section>
				</div>
			</article>
			<div class="close">
				<a onClick={(e) => exitRoundtable(e, "/dashboard")}></a>
			</div>
		</>
	);
};
