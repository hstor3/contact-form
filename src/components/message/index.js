import React, { useState } from "react";
import './style.scss';

export default function Message(props) {
    const [message, setMessage] = useState();
    props.messageInput(message)

    return (
        <div>
            <label htmlFor='message'>Message</label>
            <textarea id="message" name="message" onInput={(e) => setMessage(e.target.value)} />
        </div>
    )
}