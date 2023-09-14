import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

const tele = window.Telegram.WebApp;

function Card({ food, onAdd, onRemove }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
        onCheckout();
    };

    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
        onCheckout();
    };

    const onCheckout = () => {
        tele.MainButton.text = "Оплатить";
        tele.MainButton.show();
        tele.MainButton.textColor = "#ffffff";
        tele.MainButton.color = "#A9A9A9"; //изменяем цвет бэкграунда кнопки
    };

    return (
        <div className="card">
            {/* остальной код компонента */}
            <div className="btn-container">
                <Button title={"+"} type={"add"} onClick={handleIncrement} />
                {count !== 0 ? (
                    <Button title={"-"} type={"remove"} onClick={handleDecrement} />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Card;