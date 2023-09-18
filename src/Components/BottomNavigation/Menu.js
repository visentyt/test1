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
    const [orderCount, setOrderCount] = useState(1); // Added orderCount state
    const [shouldSendInvoice, setShouldSendInvoice] = useState(false); // New state

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
        setOrderCount(orderCount + 1); // Increment order count
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
        if (shouldSendInvoice) { // Check shouldSendInvoice before sending
            const chat_id = "-1001970812497"; // Replace with your chat ID
            const title = "Medusa";
            const description = "123 test";
            const payload = `Заказ номер ${orderCount} по счету`; // Include order number
            const provider_token = "381764678:TEST:66150";
            const currency = "RUB"; // Replace with your desired currency
            const token = "6570877120:AAEPBTRjmI3I5qVvNnk6jGNl7A0InoQI4g8"; // Replace with your bot token

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

            // Reset shouldSendInvoice back to false after sending
            setShouldSendInvoice(false);
        }
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

        // Вызываем функцию sendInvoiceToTelegram с передачей ей обновленной цены
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
