import React from "react";

function Complaints() {
    const username = window.username;
    const firstname = window.firstname;
    const photo = window.photo;
    console.log(username);
    console.log(firstname);
    console.log(photo);

    return (
        <div>
            <img src={photo} alt="User" />
            <div>Username: {username}</div>
            <div>Firstname: {firstname}</div>
        </div>
    );
}

export default Complaints;
