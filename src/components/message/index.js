import React from "react";
import './style.scss';

export default function Message() {
    return (
        <div>
            <label htmlFor='message'>Message</label>
            <textarea id="message" name="message" />
        </div>
    )
}