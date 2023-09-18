import React, { useState, useEffect, useCallback } from "react";
import "../../App.css";
import Card from "../Card/Card";
import { getData } from "../../db/db";

const tele = window.Telegram.WebApp;

function Menu() {
    const [cartItems, setCartItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchKeyword] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const foods = getData();

    // Функция для обновления надписи на кнопке оплаты
    const updateButtonLabel = useCallback((updatedTotalPrice) => {
        if (isCartVisible) {
            tele.MainButton.text = "Оплатить";
            console.log(updatedTotalPrice);
            console.log(totalPrice);
        } else {
            tele.MainButton.text = `Цена: ${updatedTotalPrice.toFixed(2)}₽`;
            tele.MainButton.show();
            tele.MainButton.textColor = "#ffffff";
            tele.MainButton.color = "#A9A9A9";
        }
    }, [isCartVisible, totalPrice]);

    // Функция для создания и отправки счета
    const handlePayment = useCallback(() => {
        console.log('totalPrice внутри handlePayment:', totalPrice); // Добавлено логирование
        if (totalPrice <= 0) {
            console.error('Общая стоимость должна быть больше нуля.');
            return;
        }

        const provider_token = "381764678:TEST:66150";
        const chat_id = "-1001970812497";
        const token = "6570877120:AAEPBTRjmI3I5qVvNnk6jGNl7A0InoQI4g8"; // Замените на ваш токен бота
        const title = "Medusa";
        const description = "123 Test";
        const payload = `Заказ_номер_${Date.now()}`;
        const currency = "RUB";

        const prices = [
            { label: "Product Price", amount: totalPrice * 100, currency: currency }
        ];

        const payloadData = {
            chat_id,
            title,
            description,
            payload,
            provider_token,
            prices: JSON.stringify(prices),
            currency: currency
        };

        fetch(`https://api.telegram.org/bot${token}/sendInvoice`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payloadData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    // Запрос на оплату успешно выполнен
                } else {
                    console.error('Ошибка отправки счета:', data.description);
                }
            })
            .catch(err => {
                console.error('Ошибка отправки счета:', err);
            });
    }, [totalPrice]);

    // Обработчик нажатия на кнопку "Оплатить"
    const handleMainButtonClick = useCallback(() => {
        if (isCartVisible) {
            setIsCartVisible(false);
            updateButtonLabel(totalPrice);
        } else {
            setIsCartVisible(true);
            tele.MainButton.text = "Оплатить";
            handlePayment();
        }
    }, [isCartVisible, totalPrice, updateButtonLabel, handlePayment]);

    // Функция для добавления продукта в корзину
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

    // Функция для удаления продукта из корзины
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

    // Эффект для настройки Telegram кнопки и надписи при изменении общей стоимости
    useEffect(() => {
        tele.ready();
        tele.MainButton.onClick(handleMainButtonClick);
        updateButtonLabel(totalPrice);
    }, [totalPrice, handleMainButtonClick, updateButtonLabel]);

    // Функция для обновления общей стоимости
    const updateTotalPrice = (priceDifference) => {
        setTotalPrice((prevTotalPrice) => prevTotalPrice + priceDifference);
        updateButtonLabel(totalPrice + priceDifference);
    };

    // Функция для фильтрации продуктов по категории
    const filterFoodsByCategory = (category) => {
        if (category === null) {
            return foods;
        } else {
            return foods.filter((food) => food.category === category);
        }
    };

    // Фильтрация продуктов в зависимости от активной категории или ключевого слова поиска
    const filteredFoods = searchKeyword
        ? foods.filter((food) =>
            food.title.toLowerCase().includes(searchKeyword.toLowerCase())
        )
        : filterFoodsByCategory(activeCategory);

    // Функция для отображения карточек продуктов
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
