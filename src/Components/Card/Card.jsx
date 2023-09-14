import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

const tele = window.Telegram.WebApp;



function Card({ food, onAdd, onRemove, totalPrice }) {
    const [count, setCount] = useState(0);
    const { title, Image, price } = food;

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
        onCheckout(); // Вызываем функцию onCheckout
    };

    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
        onCheckout(); // Вызываем функцию onCheckout
    };

    const onCheckout = () => {
        const totalPriceText = `Цена: ${totalPrice.toFixed(2)}₽`;
        tele.MainButton.show();
        tele.MainButton.setParams({
            text: totalPriceText,
            show: true,
            textColor: "#ffffff",
            color: "#A9A9A9"
        });
        tele.MainButton.show();
        tele.MainButton.textColor = "#ffffff";
        tele.MainButton.color = "#A9A9A9"; // изменяем цвет бэкграунда кнопки
    };

    return (
        <div className="card">
            <span className={count !== 0 ? "card__badge" : "card__badge--hidden"}>
                {count}
            </span>
            <div className="image__container">
                <img src={Image} alt={title} />
            </div>
            <h4 className="card__title">
                {title} <span className="card__price">{price}₽</span>
            </h4>

            <div className="btn-container">
                <Button title={"+"} type={"add"} onClick={handleIncrement} />
                {count !== 0 && (
                    <Button title={"-"} type={"remove"} onClick={handleDecrement} />
                )}
            </div>
        </div>
    );
}

export default Card;