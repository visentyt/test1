import React from "react";

function Complaints() {
    const username = window.username;
    const firstname = window.firstname;

    return (
        <div>
            <div>Username: {username}</div>
            <div>Firstname: {firstname}</div>
        </div>
    );
}

export default Complaints;
