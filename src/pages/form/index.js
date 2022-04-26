import React from "react";
import Names from "../../components/names";
import Email from "../../components/email";
import Message from '../../components/message';

export default function Form() {
    return (
        <div>
            <h1>Contact Us Form</h1>
            <Names />
            <Email />
            <Message />
            <button>Submit</button>
        </div>
    )
}