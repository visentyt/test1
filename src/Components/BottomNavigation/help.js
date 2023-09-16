import React, { useState } from "react";

function Help() {
    const [messageSent, setMessageSent] = useState(false);
    const [messageText, setMessageText] = useState(""); // Состояние для текста сообщения

    const handleSendMessage = async () => {
        try {
            const botToken = "YOUR_BOT_TOKEN"; // Замените на токен вашего бота
            const chatId = "YOUR_CHAT_ID"; // Замените на идентификатор вашей беседы

            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: messageText, // Используем текст из состояния
                }),
            });

            if (response.ok) {
                setMessageSent(true);
                setMessageText(""); // Очищаем поле ввода после отправки
            } else {
                console.error("Ошибка при отправке сообщения:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Ошибка при отправке сообщения:", error);
        }
    };

    return (
        <div>
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
            {messageSent && <p>Сообщение отправлено!</p>}
        </div>
    );
}

export default Help;
