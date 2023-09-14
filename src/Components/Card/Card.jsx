import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

const tele = window.Telegram.WebApp;
function Card({ food, onAdd, onRemove }) {
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const { title, Image, price } = food;

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
        setTotalPrice(totalPrice + food.price);
    };

    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
        setTotalPrice(totalPrice - food.price);
    };

    const onCheckout = () => {
        tele.MainButton.text = `Цена: ${totalPrice?.toFixed(2)}₽`;
        tele.MainButton.show();
        tele.MainButton.textColor = "#ffffff";
        tele.MainButton.color = "#A9A9A9";
    };

    return (
        <div className="card">
            <span className={count !== 0 ? "card__badge" : "card__badge--hidden"}>{count}</span>
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

            <Button title={"Checkout"} onClick={onCheckout} />
        </div>
    );
}

export default Card;