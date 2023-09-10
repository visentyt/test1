import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import Menu from "./Components/Menu/Menu";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import { getData } from "./db/db";
import AdminButton from "./Components/AdminButton/AdminButton";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
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
        // Обработка оформления заказа
    };

    const updateDatabase = (newDatabase) => {
        setDatabase(newDatabase);
    };

    const toggleAdminPanel = () => {
        setIsAdminPanelOpen(!isAdminPanelOpen);
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
            {isAdminPanelOpen ? (
                <AdminPanel
                    foods={foods}
                    toggleAdminPanel={toggleAdminPanel}
                />
            ) : (
                <>
                    <Cart cartItems={cartItems} onCheckout={onCheckout} />
                    <Menu setActiveCategory={setActiveCategory} />
                    <div className="cards__container">
                        {foods
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
                    <AdminButton onClick={toggleAdminPanel} />
                </>
            )}
        </>
    );
}

return (
    <>
        {/* ... */}
        {isAdminPanelOpen && (
            <AdminPanel
                database={foods}
                updateDatabase={updateDatabase}
                setActiveCategory={setActiveCategory}
            />
        )}
        {/* ... */}
    </>
);
}

export default App;