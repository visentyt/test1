import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import Menu from "./Components/Menu/Menu";
import { getData } from "./db/db";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");

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
    };

    const onRemove = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== food.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
                )
            );
        }
    };

    const onCheckout = () => {
        window.Telegram.MainButton.text = "Оплатить";
        window.Telegram.MainButton.show();
    };

    const filterFoodsByCategory = (category) => {
        if (category === null) {
            return foods;
        } else {
            return foods.filter((food) => food.category === category);
        }
    };

    const searchFoods = (keyword) => {
        setSearchKeyword(keyword);
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
            <Cart cartItems={cartItems} onCheckout={onCheckout} />
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
                <div className="menu-item" onClick={() => showCards("shots")}>
                    Шоты
                </div>
            </div>
            <div className="cards__container">
                {filteredFoods.map((food) => (
                    <Card key={food.id} food={food} onAdd={onAdd} onRemove={onRemove} />
                ))}
            </div>
        </>
    );
}

export default App;