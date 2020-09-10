import React, { useState } from "react";
import "./home.css";
import { HomeContent } from "./homeContent/HomeContent";

export const Home = () => {
	const [display, setDisplay] = useState("onboard");

	return (
		<div className="home">
			<header>
				<div className="hero">
					<nav className="light">
						<ul>
							<li>
								<a href="/dashboard">
									<h6>Dashboard</h6>
								</a>
							</li>
							<li>
								<a href="/login">
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
						{/* <!-- <h3>Keep up<br /> with your<br /> coworkers.</h3>
						<h3>Coordinate<br /> with your<br /> friends.</h3>
						<h3>Grow<br /> with your<br /> mastermind group.</h3>
						<h3>Share<br /> with your<br /> followers.</h3> --> */}
						<p>Stay on top of things with simple two-way newsletters.</p>
					</form>
				</div>
				<div className="homeContent">
					<nav>
						<ul>
							<li
								className={display === "onboard" ? "selected" : ""}
								onClick={() => setDisplay("onboard")}
							>
								<a href="javascript:void(0)">
									<h6>Join</h6>
								</a>
							</li>
							{/*<li
								className={display === "explore" ? "selected" : ""}
								onClick={() => setDisplay("explore")}
							>
								<a href="javascript:void(0)">
									<h6>Explore</h6>
								</a>
							</li>*/}
							{/*<li
								classname={display === "pricing" ? "selected" : ""}
								onClick={() => setDisplay("pricing")}
							>
								<a href="javascript:void(0)">
									<h6>Price</h6>
								</a>
							</li>*/}
						</ul>
					</nav>
					<HomeContent display={display} />
				</div>
			</header>
		</div>
	);
};
