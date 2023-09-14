import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

const tele = window.Telegram.WebApp;

function Card({ food, onAdd, onRemove }) {
    const [count, setCount] = useState(0);
    const { title, Image, price } = food;

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
        updateCheckoutButton();
    };

    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
        updateCheckoutButton();
    };

    const updateCheckoutButton = () => {
        const totalPriceText = `Цена: ${totalPrice.toFixed(2)}₽`;
        tele.MainButton.setParams({
            text: totalPriceText,
            show: true,
            textColor: "#ffffff",
            color: "#A9A9A9"
        });
    };

    const totalPrice = count * price;

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