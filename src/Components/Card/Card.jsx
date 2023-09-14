import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";


function Card({ food, onAdd, onRemove }) {
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const onUpdateTotalPrice = (amount) => {
        setTotalPrice(totalPrice + amount);
    };

    const { title, Image, price } = food;

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
        onUpdateTotalPrice(+price);
        onCheckout();
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
            onRemove(food);
            onUpdateTotalPrice(-price);
            onCheckout();
        }
    };
    const tele = window.Telegram.WebApp;
    const totalPriceText = `Цена: ${totalPrice}₽`;
    tele.MainButton.text = totalPriceText;
    tele.MainButton.textColor = "#ffffff";
    tele.MainButton.color = "#A9A9A9";
    tele.MainButton.show();
    const onCheckout = () => {
        tele.MainButton.setText(totalPriceText);
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