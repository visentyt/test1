import React, { useState, useEffect } from "react";
import "./Card.css";
import Button from "../Button/Button";

const tele = window.Telegram.WebApp;

function Card({ food, onAdd, onRemove }) {
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItems, setCartItems] = useState({});

    const { title, Image, price, id } = food;

    useEffect(() => {
        const calculateTotalPrice = () => {
            let newTotalPrice = Object.values(cartItems).reduce((acc, item) => {
                return acc + item.price * item.count; // Суммируем цены всех товаров в корзине
            }, 0);
            tele.MainButton.text = `Цена: ${newTotalPrice.toFixed(2)}₽`;
            tele.MainButton.show();
            tele.MainButton.textColor = "#ffffff";
            tele.MainButton.color = "#A9A9A9";
        };

        calculateTotalPrice();
    }, [cartItems]);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        onAdd(food);

        if (cartItems[id]) {
            // Если товар уже есть в корзине, увеличиваем его количество и обновляем цену
            const updatedItem = { ...cartItems[id], count: cartItems[id].count + 1 };
            const updatedCartItems = { ...cartItems, [id]: updatedItem };
            setCartItems(updatedCartItems);
        } else {
            // Если товара нет в корзине, добавляем его с количеством 1 и ценой
            const newItem = { id, title, price, count: 1 };
            const updatedCartItems = { ...cartItems, [id]: newItem };
            setCartItems(updatedCartItems);
        }

        setTotalPrice(totalPrice + price);
    };

    const handleDecrement = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount);
            onRemove(food);

            if (cartItems[id]) {
                // Уменьшаем количество товара в корзине и обновляем цену
                const updatedItem = { ...cartItems[id], count: cartItems[id].count - 1 };
                const updatedCartItems = { ...cartItems, [id]: updatedItem };
                setCartItems(updatedCartItems);

                if (updatedItem.count === 0) {
                    // Если количество товара достигло 0, удаляем его из корзины
                    const { [id]: removedItem, ...restItems } = updatedCartItems;
                    setCartItems(restItems);
                }
            }

            setTotalPrice(totalPrice - price);
        }
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