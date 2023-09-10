import React from "react";

function AdminButton({ onClick }) {
    return (
        <button onClick={onClick} className="admin-button">
            Админ-Панель
        </button>
    );
}

export default AdminButton;