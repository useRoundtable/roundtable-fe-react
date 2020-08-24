import React, { useState } from "react";
import Modal from "react-modal";

export const InviteModal = ({setIsOpen, roundtableId}) => {
    const [email, setEmail] = useState("");
    return (
        <>
            <header>
				<h4>Roundtable Name</h4>
				<a className="close" onClick={() => setIsOpen(false)}>
					<span>×</span>
				</a>
			</header>
			<nav>
				<ul className="stats noHover">
					<li className="roundtables">10 Members</li>
					<li className="issues">3 Issues</li>
				</ul>
			</nav>
			<div className="content">
				<form className="full">
					<div className="description">
						<h5>Invite Members</h5>
						<p>Grow [roundtable_name] by inviting new members. Members will receive each issue and can contribute responses for other roundtable members to see.</p>
					</div>
					<div className="field">
						<input type="email" name="inviteEmail" id="inviteEmail" type="email" value={email} placeholder="" onChange={(e) => setEmail(e.target.value)} required />
						<label for="inviteEmail">Friend's Email</label>
						<a className="close" href="javascript:void(0)"><span>×</span></a>
					</div>
					<div className="formBottom">
						<a className="button small" href="javascript:void(0)">
							+ Add Another
						</a>
					</div>
					<a className="button floatRight" href="javascript:void(0)">
						+ Invite
					</a>
				</form>
			</div>
        </>
    )
}