import React, { useState, useEffect, useCallback } from "react";
import "../../App.css";
import Card from "../Card/Card";
import { getData } from "../../db/db";
import Cart from "../Cart/Cart";

const tele = window.Telegram.WebApp;

function Menu() {
    const [cartItems, setCartItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchKeyword] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const handleMainButtonClick = useCallback(() => {
        if (isCartVisible) {
            setIsCartVisible(false);
            updateButtonLabel(totalPrice);
        } else {
            setIsCartVisible(true);
            tele.MainButton.text = "Оплатить";
        }
    }, [isCartVisible, totalPrice, updateButtonLabel]);

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

    const updateButtonLabel = useCallback((updatedTotalPrice) => {
        if (isCartVisible) {
            tele.MainButton.text = "Оплатить";
        } else {
            tele.MainButton.text = `Цена: ${updatedTotalPrice.toFixed(2)}₽`;
            tele.MainButton.show();
            tele.MainButton.textColor = "#ffffff";
            tele.MainButton.color = "#A9A9A9";
        }
    }, [isCartVisible]);

    useEffect(() => {
        tele.ready();
        tele.MainButton.onClick(handleMainButtonClick);
        updateButtonLabel(totalPrice);
    }, [totalPrice, handleMainButtonClick, updateButtonLabel]);

    const updateTotalPrice = (priceDifference) => {
        setTotalPrice((prevTotalPrice) => prevTotalPrice + priceDifference);
        updateButtonLabel(totalPrice + priceDifference);
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
            {isCartVisible ? (
                <>
                    <Cart cartItems={cartItems} onRemove={onRemove} />
                    <button onClick={() => setIsCartVisible(false)}>Назад в меню</button>
                </>
            ) : (
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
            )}
        </>
    );
}

export default Menu;
