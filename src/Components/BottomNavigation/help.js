import React, { useState } from "react";
import "./help.css";

function Help() {
    const [messageText, setMessageText] = useState("");
    const username = window.username;
    const [messageAlert, setMessageAlert] = useState("");

    const handleSendMessage = async (e) => {
        e.preventDefault(); // Остановить стандартное действие отправки формы

        if (!messageText) {
            setMessageAlert("Вы ничего не написали.");
            return;
        }

        try {
            const botToken = "6570877120:AAEPBTRjmI3I5qVvNnk6jGNl7A0InoQI4g8";
            const chatId = "-1001970812497";

            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: `Пользователь @${username} написал жалобу: \n Написал жалобу: \n ${messageText}`,
                }),
            });

            if (response.ok) {
                setMessageText("");
                setMessageAlert("Ваше сообщение отправленно, ответ вы получите в личные сообщения!");
            } else {
                console.error("Ошибка при отправке сообщения:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Ошибка при отправке сообщения:", error);
        }
    };

    return (
        <form className="decor" onSubmit={handleSendMessage}>
            <div className="form-left-decoration"></div>
            <div className="form-right-decoration"></div>
            <div className="circle"></div>
            <div className="form-inner">
                <h3>Написать нам</h3>
                <textarea
                    placeholder="Сообщение..."
                    rows="3"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                ></textarea>
                <input type="submit" value="Отправить" />
                {messageAlert && (
                    <p style={{ color: messageAlert === "Вы ничего не написали." ? "red" : "lime" }}>
                        {messageAlert}
                    </p>
                )}
            </div>
        </form>
    );
}

export default Help;
