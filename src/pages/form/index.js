import React from "react";
import './style.scss';
import Input from "../../components/input";
import Email from "../../components/email";
import Message from '../../components/message';

export default function Form(email) {

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="header">Contact Us Form</h1>
            <Input
                label='First Name'
                id='first'
            />
            <Input
                label='Last Name'
                id='last'
            />
            <Email />
            <Message />
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    )
}