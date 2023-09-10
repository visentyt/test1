import React from "react";
import "./Menu.css";

function Menu({ setActiveCategory }) {
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="menu">
            <button onClick={() => handleCategoryClick("hookah")}>Кальян</button>
            <button onClick={() => handleCategoryClick("beer")}>Пиво</button>
            <button onClick={() => handleCategoryClick("shot")}>Шоты</button>
            {/* Добавьте другие кнопки для остальных категорий */}
        </div>
    );
}

export default Menu;