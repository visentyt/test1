import React from "react";

function Complaints() {
    const username = window.username;
    const firstname = window.firstname;
    console.log(username);
    console.log(firstname);

    return (
        <div>
            <div>Username: {username}</div>
            <div>Firstname: {firstname}</div>
        </div>
    );
}

export default Complaints;
