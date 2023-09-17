import React from "react";

function Complaints() {
    const firstname = window.firstname;
    const photoUrl = window.userPhotoUrl;
    const username = window.username;
    const lastname = window.lastname;

    return (
        <div>
            <img src={photoUrl} alt="User" />
            <div>
            {firstname}
            {lastname}
            {username}
            </div>
        </div>
    );
}

export default Complaints;
