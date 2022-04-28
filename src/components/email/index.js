import React, { useState } from "react";

export default function Email(props) {
    const [email, setEmail] = useState();
    props.emailInput(email)

    return (
        <div>
            <label htmlFor='email'>Email</label>
            <input id="email" name="email" type="email" defaultValue={email} onInput={(e) => setEmail(e.target.value)} />
        </div>
    )
}