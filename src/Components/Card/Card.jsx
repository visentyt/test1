import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card({ food, onAdd, onRemove, cartItems, setCartItems }) {
    const [count, setCount] = useState(
        cartItems.find((x) => x.id === food.id)?.quantity || 0
    );
    const { title, Image, price } = food;

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
        setCartItems([...cartItems, { ...food, quantity: count + 1 }]);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
            onRemove(food);
            setCartItems(cartItems.filter((item) => item.id !== food.id));
        }
    };

    return (
        <div className="card">
            <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
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
