import React from "react";

export default function Input(props) {
    return (
        <div>
            <div>
                <label htmlFor={props.id}>{props.label}</label>
                <input type={props.type} id={props.id} name={props.id} onInput={(e) => props.input(e.target.value)} />
            </div>
        </div>
    )
}