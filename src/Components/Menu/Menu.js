import React from "react";
import "./Menu.css";

function Menu({ setActiveCategory, onSearch }) {
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const handleSearch = (event) => {
        const keyword = event.target.value;
        onSearch(keyword);
    };

    return (
        <div className="menu">
            <button onClick={() => handleCategoryClick(null)}>Все</button>
            <button onClick={() => handleCategoryClick("hookah")}>Кальян</button>
            <button onClick={() => handleCategoryClick("beer")}>Пиво</button>
            <button onClick={() => handleCategoryClick("shot")}>Шоты</button>
            {/* Добавьте другие кнопки для остальных категорий */}
            <input
                type="text"
                placeholder="Поиск..."
                onChange={handleSearch}
            />
        </div>
    );
}

export default Menu;