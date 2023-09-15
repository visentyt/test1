import React from "react";
import "./Card.css";
import Button from "../Button/Button";

function Card({ food, onAdd, onRemove, cartItems }) {
    const isInCart = cartItems.some((item) => item.id === food.id);

    return (
        <div className="card">
            <img src={food.Image} alt={food.title} className="card__image" />
            <h3 className="card__title">{food.title}</h3>
            <p className="card__price">{food.price}₽</p>
            {isInCart ? (
                <div className="card__quantity-control">
                    <Button title="-" type="remove" onClick={() => onRemove(food)} />
                    <p className="card__quantity">
                        {cartItems.find((item) => item.id === food.id).quantity}
                    </p>
                    <Button title="+" type="add" onClick={() => onAdd(food)} />
                </div>
            ) : (
                <Button title="+" type="add" onClick={() => onAdd(food)} />
            )}
        </div>
    );
}

export default Card;
