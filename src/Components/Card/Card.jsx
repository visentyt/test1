import React, { useState, useEffect } from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card({ food, onAdd, onRemove, totalPrice }) {
    const [count, setCount] = useState(0);
    const { title, Image, price } = food;

    useEffect(() => {
        setCount(getItemCount()); // Устанавливаем начальное значение счетчика при загрузке компонента
    }, []);

    const getItemCount = () => {
        const item = totalPrice.find((item) => item.id === food.id);
        return item ? item.quantity : 0;
    };

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
    };

    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
    };

    useEffect(() => {
        setCount(getItemCount()); // Обновляем значение счетчика при изменении списка totalPrice
    }, [totalPrice]);

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
                {count !== 0 && (
                    <Button title={"-"} type={"remove"} onClick={handleDecrement} />
                )}
            </div>
        </div>
    );
}

export default Card;