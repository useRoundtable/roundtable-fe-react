import React from "react";

export const MemberView = () => {
	return (
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
					<a href="javascript:void(0)" className="button">
						View Profile
					</a>
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
					<a href="javascript:void(0)" className="button">
						View Profile
					</a>
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
					<a href="javascript:void(0)" className="button new">
						New Responses
					</a>
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
					<a href="javascript:void(0)" className="button">
						View Profile
					</a>
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
					<a href="javascript:void(0)" className="button new">
						Just Joined
					</a>
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
					<a href="javascript:void(0)" className="button">
						View Profile
					</a>
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
					<a href="javascript:void(0)" className="button">
						View Profile
					</a>
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
					<a href="javascript:void(0)" className="button">
						Invited
					</a>
				</li>
				<li className="invited">
					<span className="avatar">
						<em>SK</em>
					</span>
					<h4>Steven Michael Kovar Steven Michael Kovar</h4>
					<a href="javascript:void(0)" className="button">
						Invited
					</a>
				</li>
			</ul>
		</section>
	);
};
