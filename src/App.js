import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData, addProduct, deleteProduct } = require("./db/db");
const foods = getData();

const tele = window.Telegram.WebApp;

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false); // Добавляем состояние для открытия и закрытия админ-панели

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

    // Функция для открытия админ-панели
    const openAdminPanel = () => {
        setIsAdminPanelOpen(true);
    };

    // Функция для закрытия админ-панели
    const closeAdminPanel = () => {
        setIsAdminPanelOpen(false);
    };

    return (
        <>
            {/* Кнопка "админка" */}
            <button className="admin-button" onClick={openAdminPanel}>
                Админка
            </button>

            {isAdminPanelOpen ? (
                <div className="admin-panel">
                    <h2>Админ-панель</h2>

                    <div id="products-container"></div>

                    <h3>Добавить новый продукт</h3>
                    <div>
                        <label htmlFor="title-input">Название:</label>
                        <input id="title-input" type="text" />

                        <label htmlFor="price-input">Цена:</label>
                        <input id="price-input" type="number" />

                        <label htmlFor="image-input">Изображение:</label>
                        <input id="image-input" type="text" />

                        <label htmlFor="category-input">Категория:</label>
                        <input id="category-input" type="text" />

                        <button id="add-button">Добавить</button>
                    </div>

                    {/* Кнопка для закрытия админ-панели */}
                    <button className="close-button" onClick={closeAdminPanel}>
                        Закрыть
                    </button>
                </div>
            ) : (
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
            )}
        </>
    );
}

export default App;