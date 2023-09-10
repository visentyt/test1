import React, { useState } from "react";
import "./Menu.css";
import Card from "../Card/Card";
const { getData } = require(".../db/db");

function Menu() {
    const [category, setCategory] = useState(null);
    const data = getData();

    // Функция для фильтрации карточек по категории
    const filterCards = (category) => {
        if (category === null) {
            return data;
        } else {
            return data.filter((item) => item.category === category);
        }
    };

    return (
        <div className="menu">
            <div className="menu__buttons">
                <button onClick={() => setCategory("hookah")}>Кальян</button>
                <button onClick={() => setCategory("beer")}>Пиво</button>
                <button onClick={() => setCategory("shot")}>Шоты</button>
                {/* Добавьте другие кнопки для остальных категорий */}
            </div>

            <div className="menu__cards">
                {filterCards(category).map((item) => (
                    <Card key={item.id} food={item} />
                ))}
            </div>
        </div>
    );
}

export default Menu;