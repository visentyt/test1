import React, { useState } from "react";
import "./Menu.css";
import Card from "../Card/Card";
import { getData } from "../../db/db";

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

    function Menu({ setActiveCategory }) {
        const handleCategoryClick = (category) => {
            setActiveCategory(category);
        };

        return (
            <div className="menu">
                <button onClick={() => handleCategoryClick("hookah")}>Кальян</button>
                <button onClick={() => handleCategoryClick("beer")}>Пиво</button>
                <button onClick={() => handleCategoryClick("shot")}>Шоты</button>
            </div>
        );
    }

export default Menu;