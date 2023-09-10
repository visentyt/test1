import React, { useRef } from "react";
import "./Menu.css";

function Menu({ setActiveCategory, onSearch }) {
    const menuRef = useRef(null); // Ссылка на DOM-элемент меню

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const handleSearch = (event) => {
        const keyword = event.target.value;
        onSearch(keyword);
    };

    // Функция пролистывания вправо
    const scrollRight = () => {
        if (menuRef.current) {
            menuRef.current.scrollLeft += 100;
        }
    };

    // Функция пролистывания влево
    const scrollLeft = () => {
        if (menuRef.current) {
            menuRef.current.scrollLeft -= 100;
        }
    };

    return (
        <div className="menu-wrapper">
            <div className="menu" ref={menuRef}>
                <button onClick={() => handleCategoryClick(null)}>Все</button>
                <button onClick={() => handleCategoryClick("hookah")}>Кальян</button>
                <button onClick={() => handleCategoryClick("beer")}>Пиво</button>
                <button onClick={() => handleCategoryClick("shot")}>Шоты</button>
                <button onClick={() => handleCategoryClick("beer")}>Пиво1</button>
                <button onClick={() => handleCategoryClick("shot")}>Шоты1</button>
                <button onClick={() => handleCategoryClick("beer")}>Пиво2</button>
                <button onClick={() => handleCategoryClick("shot")}>Шоты2</button>
                {/* Добавьте другие кнопки для остальных категорий */}
            </div>
            <div className="menu-navigation">
                <button onClick={scrollLeft}>&lt;</button>
                <button onClick={scrollRight}>&gt;</button>
            </div>
            <input
                type="text"
                placeholder="Поиск..."
                onChange={handleSearch}
            />
        </div>
    );
}

export default Menu;