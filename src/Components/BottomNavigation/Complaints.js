import React from "react";

function Complaints() {
    const name = window.firstname;
    const photoUrl = window.userPhotoUrl;

    return (
        <div>
            <img src={photoUrl || "default_image_url.jpg"} alt="User" />
            {name || "ЛК"}
        </div>
    );
}

export default Complaints;
