import React from "react";
import { NavBar } from "../navigation/NavBar";
import "./roundtable.css";
import { enterRoundtable, exitRoundtable } from "../../utils";

export const Roundtable = () => {
	document.body.classList.add("editing");
	return (
		<>
			<NavBar />
			<article className="edit show">
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
						<li className="members">
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
						<li className="issues">6 issues</li>
						<li className="responses new">32 New Responses</li>
					</ul>
				</nav>
				<div className="content">

					<section className="issue view">
						<article className="issueHeader">
							<h3 className="issue">
								<span className="number">Issue #4</span>
								<span className="status">June 6, 2020</span>
								<span className="title">Hey everyone!</span>
							</h3>
						</article>
						<article className="message">
							<ul className="stats"><li className="members"><ul className="members"><li><img src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg" alt="Steven K." /></li></ul>Steven K. says </li></ul>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor dolor nec lorem pharetra, quis cursus purus iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nisl, blandit eget arcu sit amet, euismod molestie mi. Vivamus molestie, sem nec lobortis malesuada, risus enim gravida nisi, non volutpat dui est nec ante. Fusce a felis at libero mattis scelerisque ac at neque. Aenean metus augue, tristique iaculis diam eu, commodo facilisis lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vehicula massa a massa tempus, sit amet vestibulum nisl vestibulum.</p>
						</article>
						<article className="questionList">
							<ul className="questionList">
								<h6 className="questionListHeader">Questions</h6>
								<li>What was your major accomplishment this week?</li>
								<li className="done">What do you need help with for next week?</li>
								<li>What does it look like with no paragraphs?</li>
							</ul>
							<ul className="options">
								<li><a className="button" href="javascript:void(0)">Answer Questions</a></li>
								<li><a className="button notPriority" href="javascript:void(0)">View Responses</a></li>
							</ul>
						</article>
						<article className="question">
							<div className="questionContent">
								<h6 className="questionNumber">Question 1</h6>	
								<h4 className="question">What was your major accomplishment this week?</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor dolor nec lorem pharetra, quis cursus purus iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
								<h4 className="question">What do you need help with for next week?</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor dolor nec lorem pharetra, quis cursus purus iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<p>Fusce a felis at libero mattis scelerisque ac at neque. Aenean metus augue, tristique iaculis diam eu, commodo facilisis lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vehicula massa a massa tempus, sit amet vestibulum nisl vestibulum.</p>
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
									<ul className="kudos"><li classname="icon">&hearts;</li></ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor dolor nec lorem pharetra, quis cursus purus iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									<p>Fusce a felis at libero mattis scelerisque ac at neque. Aenean metus augue, tristique iaculis diam eu, commodo facilisis lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vehicula massa a massa tempus, sit amet vestibulum nisl vestibulum.</p>
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
									<ul className="kudos"><li classname="icon">&hearts;</li></ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor dolor nec lorem pharetra, quis cursus purus iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a felis at libero mattis scelerisque ac at neque.</p>
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
									<ul className="kudos selected"><li classname="icon">&hearts;</li></ul>
									<p>Fusce a felis at libero mattis scelerisque ac at neque. Aenean metus augue, tristique iaculis diam eu, commodo facilisis lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
									<p>Pellentesque vehicula massa a massa tempus, sit amet vestibulum nisl vestibulum.</p>
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
								<h4 className="question">What does it look like with no paragraphs?</h4>
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

					<section className="issue answer">
						<article className="question">
							<div className="questionContent">
								<h6 className="questionNumber">Question 1</h6>	
								<h4 className="question">What was your major accomplishment this week?</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor dolor nec lorem pharetra, quis cursus purus iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
								<li className="textCount noHover noRemaining"><em>255</em> / 255</li>
							</ul>
							<textarea required type="text" placeholder="We'll replace this with markdown field"></textarea>
						</article>
						<article className="question">
							<div className="questionContent">
								<h6 className="questionNumber">Question 2</h6>	
								<h4 className="question">What do you need help with for next week?</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor dolor nec lorem pharetra, quis cursus purus iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<p>Fusce a felis at libero mattis scelerisque ac at neque. Aenean metus augue, tristique iaculis diam eu, commodo facilisis lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vehicula massa a massa tempus, sit amet vestibulum nisl vestibulum.</p>
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
								<li className="textCount noHover"><em>25</em> / 255</li>
							</ul>
							<textarea required type="text" placeholder="We'll replace this with markdown field"></textarea>
						</article>
						<article className="question">
							<div className="questionContent">
								<h6 className="questionNumber">Question 3</h6>	
								<h4 className="question">What does it look like with no paragraphs?</h4>
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
								<li className="textCount noHover"><em>0</em> / 255</li>
							</ul>
							<textarea required type="text" placeholder="We'll replace this with markdown field"></textarea>
						</article>
						<article className="question submit">
							<ul class="options textCenter"><li><a class="button big" href="javascript:void(0)">Submit my answers</a></li></ul>
						</article>
					</section>

					<section className="issueCreate">
						<h4>
							<em>.issueCreate</em>
						</h4>
						<h2>Title</h2>
						<ul>
							<h3>Questions</h3>
							<li>
								<h4>Question 1</h4>
							</li>
						</ul>
					</section>

					<section className="issueList">
						<ul className="issueList">
							<li className="new">
								<h3 className="issue">
									<span className="number">Issue #5</span>
									<span className="title">New Issue&hellip;</span>
									<a className="button">+ Create</a>
								</h3>
							</li>

						</ul>
						<h4>Current Issue</h4>
						<ul className="issueList currentIssue">
							<li>
								<h3 className="issue">
									<span className="number">Issue #4</span>
									<span className="title">Hey everyone!</span>
									<span className="status">Collecting responses</span>
									<span className="message">Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed. Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed. Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed.Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed.</span>
								</h3>
								<ul className="options">
									<li className="priority">
										<a className="button new" onClick={(e) => enterRoundtable(e, "/roundtable")}>
											12 New Responses
										</a>
									</li>
									<li>
										<a className="button notPriority" onClick={(e) => enterRoundtable(e, "/roundtable/edit")} >
											Set Publish Date
										</a>
									</li>
								</ul>
								<ul className="stats">
									<li className="members">
										Awaiting Responses
										<ul className="members waiting">
											<li></li>
											<li></li>
											<li></li>
										</ul>
									</li>
									<li className="more">Edit Issue</li>
								</ul>
							</li>
						</ul>
						<h4>4 Previous Issues <em>.issueList</em></h4>
						<ul className="issueList allIssues">
							<li>
								<h3 className="issue">
									<span className="number">Issue #3</span>
									<span className="title">COVID-19 Edition</span>
									<span className="status">Wrapping up</span>
									<span className="message">Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed. Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed. Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed.Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed.</span>
								</h3>
								<ul className="options">
									<li className="priority">
										<a className="button new" onClick={(e) => enterRoundtable(e, "/roundtable")}>
											2 New Responses
										</a>
									</li>
									<li>
										<a className="button notPriority" onClick={(e) => enterRoundtable(e, "/roundtable/edit")} >
											Publishing June 3, 2020 at 10:30 A.M.
										</a>
									</li>
								</ul>
								<ul className="stats">
									<li className="members">
										11 Responses
										<ul className="members">
											<li>
												<em>SK</em>
											</li>
											<li>
												<em>TK</em>
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
												<img
													alt="avatar"
													src="https://pbs.twimg.com/profile_images/469397708986269696/iUrYEOpJ_400x400.png"
												/>
											</li>
											<li>
												<img
													alt="avatar"
													src="https://pbs.twimg.com/profile_images/1268256132532862977/GDvByy9-_400x400.jpg"
												/>
											</li>
											<li>
												<img
													alt="avatar"
													src="https://pbs.twimg.com/profile_images/1165749987185053696/zVMH2HkP_400x400.jpg"
												/>
											</li>
										</ul>
									</li>
									<li className="kudos">&hearts; 482</li>
									<li className="more">Edit Issue</li>
								</ul>
							</li>
							<li>
								<h3 className="issue">
									<span className="number">Issue #2</span>
									<span className="title">Checking In</span>
									<span className="status">Complete</span>
									<span className="message">Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed. Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed. Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed.Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed.</span>
								</h3>
								<ul className="options">
									<li className="priority">
										<a className="button" onClick={(e) => enterRoundtable(e, "/roundtable")}>
											View Issue
										</a>
									</li>
									<li className="priority">
										<a className="button notPriority" onClick={(e) => enterRoundtable(e, "/roundtable")}>
											Public Link
										</a>
									</li>
									<li>
										<a className="button notPriority" onClick={(e) => enterRoundtable(e, "/roundtable/edit")} >
											Duplicate
										</a>
									</li>
									<li>
										<a className="button notPriority" onClick={(e) => enterRoundtable(e, "/roundtable/edit")} >
											Make Private
										</a>
									</li>
								</ul>
								<ul className="stats">
									<li className="members">
										6 Responses
										<ul className="members">
											<li>
												<em>TK</em>
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
									</li>
									<li className="kudos">&hearts; 482</li>
									<li className="privacy public">Public</li>
									<li className="visits">25,302 Visits</li>
								</ul>
							</li>
							<li>
								<h3 className="issue">
									<span className="number">Issue #1</span>
									<span className="title">Welcome to the Advisors Roundtable!</span>
									<span className="status">Complete</span>
									<span className="message">Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed. Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed. Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed.Zefhir’s is a parachute rescue system for turbine helicopters. Installed above the main rotor, the parachute is designed as a backup for conditions where autorotation cannot be performed.</span>
								</h3>
								<ul className="options">
									<li className="priority">
										<a className="button" onClick={(e) => enterRoundtable(e, "/roundtable")}>
											View Issue
										</a>
									</li>
									<li>
										<a className="button notPriority" onClick={(e) => enterRoundtable(e, "/roundtable/edit")} >
											Duplicate
										</a>
									</li>
									<li>
										<a className="button notPriority" onClick={(e) => enterRoundtable(e, "/roundtable/edit")} >
											Make Public
										</a>
									</li>
								</ul>
								<ul className="stats">
									<li className="members">
										3 Responses
										<ul className="members">
											<li>
												<em>SK</em>
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
										</ul>
									</li>
									<li className="kudos">&hearts; 34</li>
									<li className="privacy">Private</li>
								</ul>
							</li>
						</ul>
					</section>

					<section className="members">
						<h4>
							10 Members <em>.memberList</em>
						</h4>
						<ul className="memberList">
							<li>
								<span className="avatar">
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg"
									/>
								</span>
								<h4>Steven K.</h4>
								<a href="javascript:void(0)" className="button">View Profile</a>
								<div className="stats">
									<span>2,572</span>
									<span className="active">Active</span>
								</div>
							</li>
							<li>
								<span className="avatar">
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/1175859436398751745/_wHdYjZo_400x400.png"
									/>
								</span>
								<h4>Tony K.</h4>
								<a href="javascript:void(0)" className="button">View Profile</a>
								<div className="stats">
									<span>2,572</span>
									<span className="active">Active</span>
								</div>
							</li>
							<li>
								<span className="avatar">
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/524398486536474624/T_aUvkHo_400x400.jpeg"
									/>
								</span>
								<h4>Jimena F.</h4>
								<a href="javascript:void(0)" className="button new">New Responses</a>
								<div className="stats">
									<span>2,572</span>
									<span className="inactive">Inactive</span>
								</div>
							</li>
							<li>
								<span className="avatar">
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/761998841117683712/janWwuyI_400x400.jpg"
									/>
								</span>
								<h4>Brennan L.</h4>
								<a href="javascript:void(0)" className="button">View Profile</a>
								<div className="stats">
									<span>2,572</span>
									<span className="active">Active</span>
								</div>
							</li>
							<li>
								<span className="avatar">
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/898262358476414977/Xletgru4_400x400.jpg"
									/>
								</span>
								<h4>Brandon C.</h4>
								<a href="javascript:void(0)" className="button new">Just Joined</a>
								<div className="stats">
									<span>2,572</span>
									<span className="inactive">Inactive</span>
								</div>
							</li>
							<li>
								<span className="avatar">
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/1925156946/tbrooks_400x400.jpg"
									/>
								</span>
								<h4>Taylor B.</h4>
								<a href="javascript:void(0)" className="button">View Profile</a>
								<div className="stats">
									<span>2,572</span>
									<span className="inactive">Inactive</span>
								</div>
							</li>
							<li>
								<span className="avatar">
									<img
										alt="avatar"
										src="https://pbs.twimg.com/profile_images/556233917359853569/vvsGGZxc_400x400.jpeg"
									/>
								</span>
								<h4>Trey T.</h4>
								<a href="javascript:void(0)" className="button">View Profile</a>
								<div className="stats">
									<span>2,572</span>
									<span className="active">Active</span>
								</div>
							</li>
							<li className="invited">
								<span className="avatar">
									<em>PM</em>
								</span>
								<h4>Philip M.</h4>
								<a href="javascript:void(0)" className="button">Invited</a>
							</li>
							<li className="invited">
								<span className="avatar">
									<em>SK</em>
								</span>
								<h4>Steven Michael Kovar Steven Michael Kovar</h4>
								<a href="javascript:void(0)" className="button">Invited</a>
							</li>
						</ul>
					</section>
				</div>
			</article>
			<div className="close">
				<a href="javascript:void(0)"></a>
			</div>
		</>
	);
};
