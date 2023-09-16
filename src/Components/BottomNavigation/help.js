import React, { useState } from "react";

function Help() {
    const [messageSent, setMessageSent] = useState(false);

    const handleSendMessage = async () => {
        try {
            const botToken = "6570877120:AAEPBTRjmI3I5qVvNnk6jGNl7A0InoQI4g8"; // Замените на токен вашего бота
            const chatId = "-1001970812497"; // Замените на идентификатор вашей беседы

            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: "тест", // Замените на текст вашего сообщения
                }),
            });

            if (response.ok) {
                setMessageSent(true);
            } else {
                console.error("Ошибка при отправке сообщения:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Ошибка при отправке сообщения:", error);
        }
    };

    return (
        <div>
            <button onClick={handleSendMessage}>Отправить сообщение в Telegram</button>
            {messageSent && <p>Сообщение отправлено!</p>}
        </div>
    );
}

export default Help;
