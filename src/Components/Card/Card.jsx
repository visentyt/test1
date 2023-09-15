import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card({ food, onAdd, onRemove, updateTotalPrice, isItemInCart }) {
    const [count, setCount] = useState(0);
    const { title, Image, price } = food;

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
        updateTotalPrice(price);
    };

    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
        updateTotalPrice(-price);
    };

    return (
        <div className="card">
      <span className={`${isItemInCart ? "card__badge" : "card__badge--hidden"}`}>
        {count}
      </span>
            <div className="image__container">
                <img src={Image} alt={title} />
            </div>
            <h4 className="card__title">
                {title} <span className="card__price">{price}₽</span>
            </h4>

            <div className="btn-container">
                {isItemInCart && (
                    <>
                        <Button title={"+"} type={"add"} onClick={handleIncrement} />
                        {count !== 0 && (
                            <Button title={"-"} type={"remove"} onClick={handleDecrement} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Card;