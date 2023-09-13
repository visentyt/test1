import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import { getData } from "./db/db";

const tele = window.Telegram.WebApp;

function App() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        tele.ready();
    });
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchKeyword] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

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
        tele.MainButton.text = "Оплатить";
        tele.MainButton.show();
        tele.MainButton.textColor = "#ffffff";
        tele.MainButton.color = "#A9A9A9";
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
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsCartOpen(false);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="burger-menu">
                <button onClick={toggleMenu}>Меню</button>
                <button onClick={toggleCart}>Корзина</button>
            </div>
            {isMenuOpen && (
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
            )}
            {isCartOpen && <Cart cartItems={cartItems} onCheckout={onCheckout} />}
            {!isMenuOpen && !isCartOpen && (
                <div className="cards__container">
                    {filteredFoods.map((food) => (
                        <Card key={food.id} food={food} onAdd={onAdd} onRemove={onRemove} />
                    ))}
                </div>
            )}
        </>
    );
}

export default App;