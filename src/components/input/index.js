import React from "react";

export default function Input(props) {
    console.log(props)

    return (
        <div>
            <div>
                <label htmlFor={props.id}>{props.label}</label>
                <input id={props.id} name={props.id} />
            </div>
        </div>
    )
}