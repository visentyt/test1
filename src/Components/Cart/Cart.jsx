import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
import Card from "../Card/Card";

function Cart({ cartItems, onCheckout }) {
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

    return (
        <div className="cart__container">
            {cartItems.length === 0 ? "Вы ничего не добавили в корзину" : ""}
            <br /> <span className="">Цена: {totalPrice.toFixed(2)}₽</span>
            <Button
                title={cartItems.length === 0 ? "Заказать!" : "Оплатить"}
                type={"checkout"}
                disable={cartItems.length === 0 ? true : false}
                onClick={onCheckout}
            />
            <Card totalPrice={totalPrice} food={food} onAdd={onAdd} onRemove={onRemove} />
        </div>
    );
}

export default Cart;