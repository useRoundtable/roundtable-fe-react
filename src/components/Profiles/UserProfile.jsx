import React, { useState } from "react";

export const UserProfile = ({ closeModal }) => {
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	return (
		<>
			<header>
				<h4 className="textCenter">
					<span className="avatar">
						<img
							src="https://pbs.twimg.com/profile_images/1217113645907349505/u6wRx3nJ_400x400.jpg"
							alt="Steven K."
						/>
						{/*<em>SK</em>*/}
					</span>
					Steven K.
				</h4>
				<a className="close" onClick={() => closeModal()}>
					<span>×</span>
				</a>
			</header>
			<nav className="textCenter">
				<ul className="stats noHover">
					<li className="inactive">Inactive</li>
					<li className="roundtables">10 Roundtables</li>
					<li className="issues">3,593 kudos</li>
				</ul>
			</nav>
			<div className="content">
				<ul className="stats menu textCenter">
					<li>Profile</li>
					<li>Preferences</li>
					<li className="selected">Account</li>
				</ul>
				<form className="split">
					<div className="split">
						<div className="field">
							<input
								name="userEmail"
								id="userEmail"
								type="email"
								placeholder=""
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								required
							/>
							<label for="userEmail">Email</label>
						</div>
						<div className="description">
							<h5>Account Email</h5>
							<p>The email you use to log in to your account.</p>
						</div>
					</div>
					<div className="split">
						<div className="field">
							<input
								name="userName"
								id="userName"
								type="email"
								placeholder=""
								onChange={(e) => setUserName(e.target.value)}
								value={userName}
								required
							/>
							<label for="userName">Username</label>
						</div>
						<div className="description">
							<h5>Username</h5>
							<p>
								Your default display name across Roundtable, which will
								always display if you decide not to provide your first
								or last name.
							</p>
						</div>
					</div>
					<div className="split">
						<div className="field">
							<input
								name="firstName"
								id="firstName"
								type="text"
								placeholder=""
								onChange={(e) => setFirstName(e.target.value)}
								value={firstName}
								required
							/>
							<label for="firstName">First Name</label>
						</div>
						<div className="description">
							<h5>First Name</h5>
							<p>
								Depending on Roundtable settings, your first name may be
								displayed.
							</p>
						</div>
					</div>
					<div className="split">
						<div className="field">
							<input
								name="lastName"
								id="lastName"
								type="text"
								placeholder=""
								onChange={(e) => setLastName(e.target.value)}
								value={lastName}
								required
							/>
							<label for="lastName">Last Name</label>
						</div>
						<div className="description">
							<h5>Last Name</h5>
							<p>
								Depending on Roundtable settings, your last initial or
								full last name may be displayed.
							</p>
						</div>
					</div>
					<div className="split">
						<div className="">
							<a className="button" href="javascript:void(0)">
								Change
							</a>
						</div>
						<div className="description">
							<h5>New Password</h5>
							<p>
								Set a new password for your account. We will send an
								email to the{" "}
							</p>
						</div>
					</div>
					<a className="button floatRight" href="javascript:void(0)">
						Save
					</a>
				</form>
			</div>
		</>
	);
};
