import React, { useState } from "react";
import './style.scss';
import Input from "../../components/input";
import Message from '../../components/message';
import axios from "axios";

export default function Form() {
    const [email, setEmail] = useState();
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [message, setMessage] = useState();
    const [isValid, setIsValid] = useState(true);

    const validate = () => {
        console.log(email)
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }

    const handleSubmit = () => {
        validate();
        if (isValid) {
            axios.post("/save_form", {
                firstName: first,
                lastName: last,
                email: email,
                message: message
            })
        }
    }

    return (
        <form className="form">
            <h1 className="header">Contact Us Form</h1>
            <Input
                label='First Name'
                id='first'
                type='text'
                input={(first) => setFirst(first)}
            />
            <Input
                label='Last Name'
                id='last'
                type='text'
                input={(last) => setLast(last)}
            />
            <Input
                label='Email'
                id='email'
                type='email'
                input={(email) => setEmail(email)}
            />
            <span className={isValid ? 'emailValid' : 'emailError'}>Please enter a valid email</span>
            <Message
                messageInput={(message) => setMessage(message)}
            />
            <input type="button" className="submit-btn" value='Submit' onClick={() => handleSubmit()}/>
        </form>
    )
}