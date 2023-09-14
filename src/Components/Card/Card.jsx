import React, { useState, useEffect } from "react";
import "./Card.css";
import Button from "../Button/Button";
import { getData } from "../../db/db";

const tele = window.Telegram.WebApp;

function Card({ food, onAdd, onRemove }) {
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const { title, Image, price, id } = food;

    useEffect(() => {
        const onCheckout = () => {
            tele.MainButton.text = `Цена: ${totalPrice?.toFixed(2)}₽`;
            tele.MainButton.show();
            tele.MainButton.textColor = "#ffffff";
            tele.MainButton.color = "#A9A9A9";
        };

        onCheckout();
    }, [totalPrice]);

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
    };

    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - price);
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
                {count !== 0 ? (
                    <Button title={"-"} type={"remove"} onClick={handleDecrement} />
                ) : (
                    ""
                )}
            </div>

            {id === getData().length && (
                <div>
                    <h4>Итоговая цена:</h4>
                    <p>{`Цена: ${totalPrice?.toFixed(2)}₽`}</p>
                </div>
            )}
        </div>
    );
}

export default Card;