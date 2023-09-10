import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const foods = getData();

const tele = window.Telegram.WebApp;

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
        tele.ready();
    });

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
        tele.MainButton.text = "Оплатить";
        tele.MainButton.show();
    };

    const showCards = (category) => {
        setActiveCategory(category);
    };

    const searchFoods = (event) => {
        setSearchKeyword(event.target.value);
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
                <div className="menu-item" onClick={() => showCards("shot")}>
                    Шоты
                </div>
                <div className="menu-item" onClick={() => showCards("drink")}>
                    Напитки
                </div>
                <div className="menu-item" onClick={() => showCards("drink")}>
                    Напитки
                </div>
                <div className="menu-item" onClick={() => showCards("drink")}>
                    Напитки
                </div>
                <div className="menu-item" onClick={() => showCards("drink")}>
                    Напитки
                </div>
                <div className="menu-item" onClick={() => showCards("drink")}>
                    Напитки
                </div>
                <div className="menu-item" onClick={() => showCards("drink")}>
                    Напитки
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Поищем?"
                        value={searchKeyword}
                        onChange={searchFoods}
                    />
                </div>
            </div>
            <div className="cards__container">
                {filteredFoods.map((food) => (
                    <Card
                        key={food.id}
                        food={food}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </>
    );
}

export default App;