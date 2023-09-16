import React, { useEffect } from "react";
import axios from "axios";
import "./help.css";

function Test() {
    useEffect(() => {
        const TOKEN = "6142567448:AAHxkon6K1KcyrjA5rhZpVFurjVcp6ex73k";
        const CHAT_ID = "-1001970812497";
        const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
        const tg = window.Telegram.WebApp;

        document.getElementById("tgusername").value = "@" + tg.initDataUnsafe.user.username;
        document.getElementById("privetname").textContent = tg.initDataUnsafe.user.first_name;

        tg.expand();
        tg.ready();

        document.getElementById('tg-form').addEventListener('submit', function (e) {
            e.preventDefault();

            let username = document.getElementById("tgusername").value;
            let message = `<b>❕Человек попросил помощи❕</b>\n`;
            message += `<b>Отправитель:</b> ${username}\n`;
            message += `<b>В чем помочь:</b> ${this.email.value}`;

            axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            })
                .then((res) => {
                    this.email.value = "";
                    document.getElementById('success').innerHTML = "Запрос отправлен, скоро с вами свяжутся)";
                    document.getElementById('success').style.display = "block";
                })
                .catch((err) => {
                    console.log('Ошибка');
                })
                .finally(() => {
                    console.log('Отправлено');
                });
        });
    }, []);

    return (
            <div className="col-md-6 offset-md3">
                <form id="tg-form">
                    <div className="form-group" style={{ visibility: "hidden" }}>
                        <label className="form-label">Ваш телеграм</label>
                        <input type="text" id="tgusername" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Чем вам помочь?</label>
                        <input type="text" name="email" className="form-control" />
                    </div>

                    <div id="success" className="alert alert-success" role="alert" style={{ display: "none" }}></div>

                    <button type="submit" className="btn btn-primary mt-4">Отправить</button>
                </form>
            </div>
    );
}

export default Test;
