import React, { useState, useEffect } from "react";
import "./Card.css";
import Button from "../Button/Button";
import { getData } from "../../db/db";

const tele = window.Telegram.WebApp;

function Card({ food, onAdd, onRemove }) {
    const [count, setCount] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const updatedTotalPrice = selectedItems.reduce(
            (sum, item) => sum + item.price * item.count,
            0
        );
        setTotalPrice(updatedTotalPrice);

        const onCheckout = () => {
            tele.MainButton.text = `Цена: ${updatedTotalPrice?.toFixed(2)}₽`;
            tele.MainButton.show();
            tele.MainButton.textColor = "#ffffff";
            tele.MainButton.color = "#A9A9A9";
        };

        onCheckout();
    }, [selectedItems]);

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
        const selectedItem = selectedItems.find((item) => item.id === food.id);
        if (selectedItem) {
            selectedItem.count += 1;
        } else {
            setSelectedItems([...selectedItems, { ...food, count: 1 }]);
        }
    };

    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
        const selectedItem = selectedItems.find((item) => item.id === food.id);
        if (selectedItem) {
            selectedItem.count -= 1;
            if (selectedItem.count === 0) {
                setSelectedItems(selectedItems.filter((item) => item.id !== food.id));
            }
        }
    };

    return (
        <div className="card">
            <span className={count !== 0 ? "card__badge" : "card__badge--hidden"}>
                {count}
            </span>
            <div className="image__container">
                <img src={food.Image} alt={food.title} />
            </div>
            <h4 className="card__title">
                {food.title} <span className="card__price">{food.price}₽</span>
            </h4>

            <div className="btn-container">
                <Button title={"+"} type={"add"} onClick={handleIncrement} />
                {count !== 0 ? (
                    <Button title={"-"} type={"remove"} onClick={handleDecrement} />
                ) : (
                    ""
                )}
            </div>

            {food.id === getData().length && (
                <div>
                    <h4>Итоговая цена:</h4>
                    <p>{`Цена: ${totalPrice?.toFixed(2)}₽`}</p>
                </div>
            )}
        </div>
    );
}

export default Card;