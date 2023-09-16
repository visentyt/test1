import React, { useState } from "react";
import "./help.css";

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
        <form className="decor">
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
                <input type="submit" value="Отправить" onClick={handleSendMessage} />
                {messageAlert && <p>{messageAlert}</p>}
            </div>
        </form>
    );
}

export default Help;
