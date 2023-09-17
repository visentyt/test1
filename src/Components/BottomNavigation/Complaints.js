import React from "react";

function Complaints() {
    const name = window.firstname;
    const photoUrl = window.userPhotoUrl;
    const username = window.username;

    return (
        <div>
            <img src={photoUrl} alt="User" />
            ${name}
            ${username}
        </div>
    );
}

export default Complaints;
