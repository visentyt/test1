import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import Menu from "./Components/Menu/Menu";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import { getData, addFood, deleteFood } from "./db/db";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [database, setDatabase] = useState(getData());
    const [showAdminPanel, setShowAdminPanel] = useState(false); // Добавляем состояние для отображения админ панели

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
        // Обработка оформления заказа
    };

    

    const handleAdminClick = () => {
        setShowAdminPanel(!showAdminPanel); // Изменяем состояние для отображения/скрытия админ панели
    };

    return (
        <>
            <div className="circle-img-container">
                <img
                    className="circle-img"
                    src="https://taplink.st/a/0/c/0/8/4d0981.jpg?4"
                    alt="logo"
                />
            </div>
            <Cart cartItems={cartItems} onCheckout={onCheckout} />
            {showAdminPanel ? ( // Показываем админ панель, если showAdminPanel === true
                <AdminPanel database={database} addFood={addFood} deleteFood={deleteFood} />

            ) : (
                <>
                    <Menu setActiveCategory={setActiveCategory} />
                    <div className="cards__container">
                        {database
                            .filter((food) =>
                                activeCategory ? food.category === activeCategory : true
                            )
                            .map((food) => (
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
            <button
                className="admin-button"
                onClick={handleAdminClick}
            >
                Админка
            </button>
        </>
    );
}

export default App;