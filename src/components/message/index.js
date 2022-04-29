import React, { useState } from "react";
import './style.scss';

export default function Message(props) {

    return (
        <div>
            <label htmlFor='message'>Message</label>
            <textarea id="message" name="message" onInput={(e) => props.messageInput(e.target.value)} />
        </div>
    )
}