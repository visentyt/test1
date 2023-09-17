import React from "react";

function Complaints() {
    const firstname = window.firstname;
    const photoUrl = window.userPhotoUrl;
    const username = window.username;
    const lastname = window.lastname;

    return (
        <div>
            <img src={photoUrl} alt="User" />
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{username}</p>
            <p>{id}</p>
        </div>
    );
}

export default Complaints;
