import React, { useState } from "react";
import "./help.css"

function Help() {
    const [messageText, setMessageText] = useState("");
    const username = window.username;
    const [messageAlert, setMessageAlert] = useState("");

    const handleSendMessage = async () => {
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
                    text: `Пользователь @${username} написал жалобу: \n ${messageText}`,
                }),
            });

            if (response.ok) {
                setMessageText("");
                setMessageAlert("Сообщение отправлено!");
            } else {
                console.error("Ошибка при отправке сообщения:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Ошибка при отправке сообщения:", error);
        }
    };

    return (
        <div className="main">
            <div>
                <label htmlFor="message">Введите текст сообщения:</label>
                <input
                    type="text"
                    id="message"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                />
            </div>
            <button onClick={handleSendMessage}>Отправить сообщение в Telegram</button>
            {messageAlert && <p>{messageAlert}</p>}
        </div>
    );
}

export default Help;
