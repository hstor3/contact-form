import React, { useState } from "react";

export default function Input(props) {
    const [input, setInput] = useState();
    props.nameInput(input)

    return (
        <div>
            <div>
                <label htmlFor={props.id}>{props.label}</label>
                <input id={props.id} name={props.id} onInput={(e) => setInput(e.target.value)} />
            </div>
        </div>
    )
}