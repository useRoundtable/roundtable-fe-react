import React, { useState } from "react";
import "./login.css";
import "../../index.css";
import { useMutation } from "@apollo/react-hooks";

import { LOGIN as login } from "../../resolvers/mutations";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userLogin, { loading }] = useMutation(login, {
		onCompleted({ login }) {
			localStorage.setItem("authorization", `Bearer ${login.token}`);
			window.location.assign("/dashboard");
		},
	});

	if (loading) {
		return <h1>Loading....</h1>;
	}
	return (
		<>
			<nav className="login">
				<ul>
					<li>
						<ul className="roundtable logo">
							<section>
								<li></li>
								<li></li>
								<li></li>
							</section>
						</ul>
						<h3 className="logo">Roundtable</h3>
					</li>
				</ul>
				<div class="get-started">
				<form>
					<div className="field">
						<input
							name="login-email"
							id="login-email"
							type="email"
							placeholder=""
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<label for="login-email">Email</label>
					</div>
					<div className="field">
						<input
							name="login-password"
							id="login-password"
							type="password"
							placeholder=""
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
						/>
						<label for="login-password">Password</label>
					</div>
					<a
						className="button"
						// href="/dashboard"
						onClick={() => {
							userLogin({
								variables: { email: email, password: password },
							});
						}}
					>
						Log In
					</a>
				</form>
			</div>
			</nav>
		</>
	);
};
