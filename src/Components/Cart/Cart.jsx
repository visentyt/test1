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


const provider_token = "381764678:TEST:66150";
const chat_id = "-1001970812497";
const token = "6570877120:AAEPBTRjmI3I5qVvNnk6jGNl7A0InoQI4g8"; // Замените на ваш токен бота
const title = "Medusa";
const description = "123 Test";
const payload = `Заказ_номер_${Date.now()}`;
const currency = "RUB";

const prices = [
    { label: "Product Price", amount: totalPrice * 100, currency: currency }
];
