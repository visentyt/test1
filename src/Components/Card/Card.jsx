import React, { useState, useEffect, useCallback } from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card({ food, onAdd, onRemove, totalPrice }) {
    const [count, setCount] = useState(0);
    const { title, Image, price } = food;

    // Функция для получения количества товара в корзине
    const getItemCount = useCallback(() => {
        const item = totalPrice.find((item) => item.id === food.id);
        return item ? item.quantity : 0;
    }, [totalPrice, food]);

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
    };

    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
    };

    // Устанавливаем начальное значение счетчика при загрузке компонента
    useEffect(() => {
        setCount(getItemCount());
    }, [getItemCount]);

    // Обновляем значение счетчика при изменении массива `totalPrice`
    useEffect(() => {
        setCount(getItemCount());
    }, [totalPrice, getItemCount]);

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