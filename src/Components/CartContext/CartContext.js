// Ваш файл CartContext.js (или какой-то другой)

import { createContext, useContext, useState } from "react";

// Создайте контекст для корзины
const CartContext = createContext();

// Создайте провайдер для корзины
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Функция для добавления продукта в корзину
    const addToCart = (food) => {
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
    const removeFromCart = (food) => {
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
        updateTotalPrice(-food.price);
    };

    // Функция для обновления общей стоимости
    const updateTotalPrice = (priceDifference) => {
        setTotalPrice((prevTotalPrice) => prevTotalPrice + priceDifference);
    };

    return (
        <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Хук для использования состояния корзины
export function useCart() {
    return useContext(CartContext);
}
