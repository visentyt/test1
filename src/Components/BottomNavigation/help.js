import React, { useEffect } from "react";
import axios from "axios";

function Test() {
    useEffect(() => {
        // Создайте функцию для выполнения кода после загрузки документа
        $(document).ready(function () {
            // Устанавливаем имя пользователя
            let tg = window.Telegram.WebApp;
            document.getElementById("tgusername").value = "@" + tg.initDataUnsafe.user.username;
            document.getElementById("privetname").textContent = tg.initDataUnsafe.user.first_name;
            const chatId = tg.initDataUnsafe.user.id;

            tg.expand();
            tg.ready();


            // Отправляем сообщение в Telegram
            const TOKEN = "6142567448:AAHxkon6K1KcyrjA5rhZpVFurjVcp6ex73k";
            const CHAT_ID = "-1001970812497";
            const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
            const success = document.getElementById('success');
            let username = document.getElementById("tgusername").value;

            document.getElementById('tg').addEventListener('submit', function (e) {
                e.preventDefault();

                let message = `<b>❕Человек попросил помощи❕</b>\n`;
                message += `<b>Отправитель:</b> ${username}\n`;
                message += `<b>В чем помочь:</b> ${this.email.value}`;

                axios.post(URL_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                })
                    .then((res) => {
                        this.name.value = "";
                        this.email.value = "";
                        success.innerHTML = "Запрос отправлен, скоро с вами свяжутся)";
                        success.style.display = "block";
                    })
                    .catch((err) => {
                        console.log('Ошибка');
                    })
                    .finally(() => {
                        console.log('Отправлено');
                    })
            });
        });
    }, []);

    return (
        <div>
            <div className="privet">
                <div>Привет, <span id="privetname"></span></div>
            </div>

            <div className="my111 ">
                <ul className="nav nav-pills navbar-fixed-bottom row-fluid">
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#"><img src="https://i.ibb.co/mGLPBzT/pngwing-com-13.png"/><p style={{ color: "black" }}>Бонусы</p><span className="caret"></span></a>
                        {/* Ваш код для меню Бонусы */}
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#"><img src="https://i.ibb.co/mGLPBzT/pngwing-com-13.png"/><p style={{ color: "black" }}>Лутбоксы</p><span className="caret"></span></a>
                        {/* Ваш код для меню Лутбоксы */}
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#"><img src="https://i.ibb.co/mGLPBzT/pngwing-com-13.png"/><p style={{ color: "black" }}>О нас</p><span className="caret"></span></a>
                        {/* Ваш код для меню О нас */}
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#"><img src="https://i.ibb.co/mGLPBzT/pngwing-com-13.png"/><p style={{ color: "black" }}>Кабинет</p><span className="caret"></span></a>
                        {/* Ваш код для меню Кабинет */}
                    </li>
                </ul>

                <div className="tab-content">
                    {/* Ваш код для содержимого вкладок */}
                </div>
            </div>

            {/* Подключение необходимых скриптов */}
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
            <script src="https://telegram.org/js/telegram-web-app.js"></script>

            {/* Ваш JavaScript-код для обработки данных */}
        </div>
    );
}

export default Test;
