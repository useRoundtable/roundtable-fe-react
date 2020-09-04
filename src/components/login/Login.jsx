import React, { useState } from "react";
import "./login.css";
import "../../index.css";
import { useMutation } from "@apollo/client";

import { setUser } from "../../auth";

import { LOGIN as login } from "../../resolvers/mutations";

export const Login = ({ redirectTo, setIsRegistering }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userLogin] = useMutation(login, {
		onCompleted({ login }) {
			setUser(`Bearer ${login.token}`);
			window.location.assign(redirectTo);
		},
	});
	console.log(window.location.pathname.split("/"));
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
					<form
						onKeyPress={(event) => {
							if (event.key === "Enter") {
								userLogin({
									variables: { email: email, password: password },
								});
							}
						}}
					>
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
							className="button full"
							type="submit"
							onClick={() => {
								userLogin({
									variables: { email: email, password: password },
								});
							}}
						>
							Log In
						</a>
						<a
							className="button full"
							type="submit"
							onClick={() => {
								setIsRegistering(true);
							}}
						>
							Register
						</a>
					</form>
				</div>
			</nav>
		</>
	);
};
