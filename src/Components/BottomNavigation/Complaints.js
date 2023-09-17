import React from "react";

function Complaints() {
    const name = window.firstname;
    const photoUrl = window.userPhotoUrl;
    const username = window.username;
    const id = window.id;

    console.log("first_name:", name);
    console.log("username:", username);
    return (
        <div>
            <img src={photoUrl} alt="User" />
            <p>{name}</p>
            <p>{username}</p>
            <p>{id}</p>
        </div>
    );
}

export default Complaints;
