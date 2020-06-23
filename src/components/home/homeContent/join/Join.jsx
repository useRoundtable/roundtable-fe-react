import React, {useState} from "react";

export const Join = () => {
	const [email, setEmail] = useState("")
	const [username, setUsername] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	return (
		<article className="join">
			<h3>Your first Roundtable</h3>
			<form>
			<div className="field">
				<input name="join-email" id="join-email" type="email" placeholder="" value={email} onChange={e => setEmail(e.target.value)} required />
				<label for="join-email">Email</label>
			</div>
			<div className="field">
				<input name="join-username" id="join-username" type="text" placeholder="" value={username} onChange={e => setUsername(e.target.value)} required />
				<label for="join-username">Username</label>
			</div>
			<div className="field">
				<input name="join-firstName" id="join-firstName" type="text" placeholder="" value={firstName} onChange={e => setFirstName(e.target.value)} required />
				<label for="join-firstName">First Name</label>
			</div>
			<div className="field">
				<input name="join-lastName" id="join-lastName" type="text" placeholder="" value={lastName} onChange={e => setLastName(e.target.value)} required />
				<label for="join-lastName">Last Name</label>
			</div>
			<div className="field">
				<input name="join-password" id="join-password" type="password" placeholder="" value={password} onChange={e => setPassword(e.target.value)} required />
				<label for="join-password">Password</label>
			</div>
			<div className="field">
				<input name="join-confirmPassword" id="join-confirmPassword" type="password" placeholder="" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
				<label for="join-confirmPassword">Confirm Password</label>
			</div>
			<a className="button big" href="javascript:void(0)">Get Started</a>
			</form>
		</article>
		);
};
