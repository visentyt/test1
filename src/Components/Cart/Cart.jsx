// Cart.js
import React from "react";

function Cart({ cartItems, onRemove }) {
    return (
        <div className="cart">
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <span>{item.title} (x{item.quantity})</span>
                    <button onClick={() => onRemove(item)}>Удалить</button>
                </div>
            ))}
            <button className="checkout-button">Оплатить</button>
        </div>
    );
}

export default Cart;
