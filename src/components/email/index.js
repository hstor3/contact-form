import React, { useState } from "react";

export default function Email() {
    const [email, setEmail] = useState();

    return (
        <div>
            <label htmlFor='email'>Email</label>
            <input id="email" name="email" type="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
    )
}