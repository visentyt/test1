import React, { useState, useEffect, useCallback } from 'react';
import '../../App.css';
import Card from '../Card/Card';
import { getData } from '../../db/db';
import Axios from 'axios'; // Импортируем Axios

const tele = window.Telegram.WebApp;

function Menu() {
    const [cartItems, setCartItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchKeyword] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    const foods = getData();

    const initiatePayment = useCallback(() => {
        const chatId = '-1001970812497'; // Замените на действительный chat_id

        Axios.post('https://medusakhabarovsk.ru/createInvoiceLink', {
            title: 'Оплата заказа',
            amount: totalPrice * 100,
            chat_id: chatId, // Передайте действительный chat_id
        })
            .then((response) => {
                const invoiceLink = response.data.result;
console.log(invoiceLink);
                // Открываете инвойс-линк в приложении
                tele.openInvoice(invoiceLink);
            })
            .catch((error) => {
                console.error('Ошибка при создании инвойса:', error);
            });
    }, [totalPrice]);



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

    const updateTotalPrice = (priceDifference) => {
        const newTotalPrice = totalPrice + priceDifference;
        setTotalPrice(newTotalPrice);
    };

    useEffect(() => {
        tele.MainButton.text = `Цена: ${totalPrice.toFixed(2)}₽`;
        tele.MainButton.show();
        tele.MainButton.textColor = '#ffffff';
        tele.MainButton.color = '#A9A9A9';
    }, [totalPrice]);

    useEffect(() => {
        const handleClick = () => {
            initiatePayment();
        };
        tele.MainButton.onClick(handleClick);

        return () => {
            tele.MainButton.offClick(handleClick);
        };
    }, [initiatePayment]);

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