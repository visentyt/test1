import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
import Card from "../Card/Card";

function Cart({ cartItems, onCheckout, onAdd, onRemove }) {
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

    return (
        <div className="cart__container">
            {cartItems.length === 0 ? "Вы ничего не добавили в корзину" : ""}
            <br />
            <span className="">Цена: {totalPrice.toFixed(2)}₽</span>
            <Button
                title={cartItems.length === 0 ? "Заказать !" : "Оплатить"}
                type={"checkout"}
                disable={cartItems.length === 0 ? true : false}
                onClick={onCheckout}
            />
            {cartItems.map((food) => (
                <Card
                    key={food.id}
                    food={food}
                    onAdd={onAdd} // Передаем функцию onAdd
                    onRemove={onRemove} // Передаем функцию onRemove
                    cartItems={cartItems}
                />
            ))}
        </div>
    );
}

export default Cart;