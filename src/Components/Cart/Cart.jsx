import React from "react";
import "./Cart.css";
import Button from "../Button/Button";

function Cart({ cartItems, onCheckout, totalPrice, activeCategory }) {
    const filteredCartItems = activeCategory
        ? cartItems.filter((item) => item.category === activeCategory)
        : cartItems;

    return (
        <div className="cart__container">
            {filteredCartItems.length === 0
                ? "Вы ничего не добавили в корзину"
                : ""}
            <br /> <span className="">Цена: {totalPrice.toFixed(2)}₽</span>
            <Button
                title={`${
                    filteredCartItems.length === 0 ? "Заказать !" : "Оплатить"
                } `}
                type={"checkout"}
                disable={filteredCartItems.length === 0 ? true : false}
                onClick={onCheckout}
            />
        </div>
    );
}

export default Cart;
