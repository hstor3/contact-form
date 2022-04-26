import React from "react";
import './style.scss';
import Names from "../../components/names";
import Email from "../../components/email";
import Message from '../../components/message';

export default function Form() {
    return (
        <div>
            <h1 className="header">Contact Us Form</h1>
            <Names />
            <Email />
            <Message />
            <button className="submit-btn">Submit</button>
        </div>
    )
}