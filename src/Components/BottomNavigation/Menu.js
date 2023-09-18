import React, { useState, useEffect } from "react";
import "../../App.css";
import Card from "../Card/Card";
import { getData } from "../../db/db";

const tele = window.Telegram.WebApp;

function Menu() {
    const [cartItems, setCartItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchKeyword] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);

    const foods = getData();

    const onAdd = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...food, quantity: 1 }]);
        }
        updateTotalPrice(food.price);
    };

    const onRemove = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist) {
            if (exist.quantity === 1) {
                setCartItems(cartItems.filter((x) => x.id !== food.id));
            } else {
                setCartItems(
                    cartItems.map((x) =>
                        x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
                    )
                );
            }
            updateTotalPrice(-food.price);
        }
    };

    useEffect(() => {
        tele.ready();
    }, []);

    const sendInvoiceToTelegram = (totalPrice) => {
        const chat_id = "<your_chat_id>"; // Replace with your chat ID
        const title = "Your Invoice Title";
        const description = "Your Invoice Description";
        const payload = "Your Invoice Payload";
        const provider_token = "Your Provider Token";
        const currency = "RUB"; // Replace with your desired currency
        const token = "<your_bot_token>"; // Replace with your bot token

        const prices = [{ label: "Total Price", amount: Math.floor(totalPrice * 100) }]; // Convert price to cents

        const payloadData = {
            chat_id,
            title,
            description,
            payload,
            provider_token,
            prices: JSON.stringify(prices),
            currency,
        };

        fetch(`https://api.telegram.org/bot${token}/sendInvoice`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payloadData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    // Invoice request successful
                    console.log("Invoice sent successfully!");
                } else {
                    console.error("Error sending invoice:", data.description);
                }
            })
            .catch((err) => {
                console.error("Error sending invoice:", err);
            });
    };

    const updateTotalPrice = (priceDifference) => {
        setTotalPrice((prevTotalPrice) => prevTotalPrice + priceDifference);
        updateButtonLabel(totalPrice + priceDifference);
    };

    const updateButtonLabel = (updatedTotalPrice) => {
        tele.MainButton.text = `Цена: ${updatedTotalPrice.toFixed(2)}₽`;
        tele.MainButton.show();
        tele.MainButton.textColor = "#ffffff";
        tele.MainButton.color = "#A9A9A9";

        // Call sendInvoiceToTelegram with the updated total price
        sendInvoiceToTelegram(updatedTotalPrice);
    };

    const filterFoodsByCategory = (category) => {
        if (category === null) {
            return foods;
        } else {
            return foods.filter((food) => food.category === category);
        }
    };

    const filteredFoods = searchKeyword
        ? foods.filter((food) =>
            food.title.toLowerCase().includes(searchKeyword.toLowerCase())
        )
        : filterFoodsByCategory(activeCategory);

    const showCards = (category) => {
        setActiveCategory(category);
    };

    return (
        <>
            <div id="menu">
                <div className="menu-item" onClick={() => showCards(null)}>
                    Все
                </div>
                <div className="menu-item" onClick={() => showCards("hookah")}>
                    Кальян
                </div>
                <div className="menu-item" onClick={() => showCards("beer")}>
                    Пиво
                </div>
                <div className="menu-item" onClick={() => showCards("shot")}>
                    Шоты
                </div>
                <div className="menu-item" onClick={() => showCards("drink")}>
                    Напитки
                </div>
                <div className="menu-item" onClick={() => showCards("eat")}>
                    Закуски
                </div>
                <div className="menu-item" onClick={() => showCards("kokteil")}>
                    Коктейли
                </div>
            </div>
            <div className="cards__container">
                {filteredFoods.map((food) => (
                    <Card
                        key={food.id}
                        food={food}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                ))}
            </div>
        </>
    );
}

export default Menu;
