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

    const [totalPrice, setTotalPrice] = useState(0); // Добавьте переменную totalPrice

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
        tele.MainButton.setParams({
            text: `Цена: ${totalPrice}` // Используйте totalPrice здесь
        });
        tele.MainButton.show();
        tele.MainButton.textColor = "#ffffff";
        tele.MainButton.color = "#A9A9A9";
    };

    useEffect(() => {
        const calculateTotalPrice = () => {
            const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
            setTotalPrice(totalPrice); // Обновляем значение totalPrice
        };

        calculateTotalPrice(); // Вызываем функцию при изменении cartItems
    }, [cartItems]);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    };


    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);

    };

    return (
        <>
            <div className="burger-menu">
                <button onClick={toggleMenu}>Меню</button>
                <button onClick={toggleCart}>Корзина</button>
            </div>
            {isMenuOpen ? (
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
                <Card key={food.id} food={food} onAdd={onAdd} onRemove={onRemove} />
    ))}
</div>
                </>
            ) : null}
            {isCartOpen && <Cart cartItems={cartItems} onCheckout={onCheckout} />}
        </>
    );
}

export default App;