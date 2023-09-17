import React, { useState, useEffect } from "react";

function Complaints() {
    const [userName, setUserName] = useState("Загрузка...");

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            // Получите имя пользователя из Telegram и установите его
            const name = window.Telegram.WebApp.getUser().first_name; // предполагаемая функция, вам следует проверить документацию SDK для правильной функции.
            setUserName(name);
        }
    }, []);

    return <div>ЛК: {userName}</div>;
}

export default Complaints;
