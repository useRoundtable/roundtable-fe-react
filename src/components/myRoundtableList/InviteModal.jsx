import React, { useState } from "react";
import Modal from "react-modal";

export const InviteModal = ({setIsOpen, roundtableId}) => {
    console.log(roundtableId)
    return (
        <>
            <h2>Invite your friend!</h2>
            <input />
            <button>Send Invite</button>
            <a onClick={() => setIsOpen(false)}>X</a>
        </>
    )
}