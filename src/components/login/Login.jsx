import React from "react";
import "./login.css";

export const Login = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<ul className="roundtableLogo">
							<section>
								<li></li>
								<li></li>
								<li></li>
							</section>
						</ul>
						<h3 className="logo">Roundtable</h3>
					</li>
				</ul>
			</nav>
			<div class="get-started">
				<form>
					<div class="field">
						<input
							name="login-email"
							id="login-email"
							type="email"
							placeholder=""
							value=""
							required
						/>
						<label for="login-email">Email</label>
					</div>
					<div class="field">
						<input
							name="login-password"
							id="login-password"
							type="password"
							placeholder=""
							value=""
							required
						/>
						<label for="login-password">Password</label>
					</div>
					<a class="button" href="javascript:void(0)">
						Log In
					</a>
				</form>
			</div>
		</>
	);
};
