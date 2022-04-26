import React from "react";

export default function Names() {
    return (
        <div>
            <div>
                <label for='first'>First Name</label>
                <input id="first" name="first" />
            </div>
            <div>
                <label for='last'>Last Name</label>
                <input id="last" name="last" />
            </div>
        </div>
    )
}