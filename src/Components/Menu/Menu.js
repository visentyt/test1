import React, { useState, useRef } from "react";
import "./Menu.css";

function Menu({ setActiveCategory, onSearch }) {
    const menuRef = useRef(null); // Ссылка на DOM-элемент меню
    const [activeCategory, setActiveCategory] = useState(null); // Активная категория

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setActiveCategory(category);
    };

    const handleSearch = (event) => {
        const keyword = event.target.value;
        onSearch(keyword);
    };

    const scrollRight = () => {
        if (menuRef.current) {
            menuRef.current.scrollLeft += 100;
        }
    };

    const scrollLeft = () => {
        if (menuRef.current) {
            menuRef.current.scrollLeft -= 100;
        }
    };

    return (
        <div className="menu-wrapper">
            {/* Фиксированное горизонтальное меню */}
            <div className="menu" ref={menuRef}>
                <button
                    onClick={() => handleCategoryClick(null)}
                    className={activeCategory === null ? "active" : ""}
                >
                    Все
                </button>
                <button
                    onClick={() => handleCategoryClick("hookah")}
                    className={activeCategory === "hookah" ? "active" : ""}
                >
                    Кальян
                </button>
                <button
                    onClick={() => handleCategoryClick("beer")}
                    className={activeCategory === "beer" ? "active" : ""}
                >
                    Пиво
                </button>
                <button
                    onClick={() => handleCategoryClick("shot")}
                    className={activeCategory === "shot" ? "active" : ""}
                >
                    Шоты
                </button>
                {/* Добавьте другие кнопки для остальных категорий */}
            </div>

            {/* Кнопки пролистывания меню */}
            {menuRef.current &&
                menuRef.current.scrollWidth > menuRef.current.clientWidth && (
                    <div className="menu-navigation">
                        <button onClick={scrollLeft}>&lt;</button>
                        <button onClick={scrollRight}>&gt;</button>
                    </div>
                )}

            {/* Фильтрация карточек по активной категории */}
            <input
                type="text"
                placeholder="Поиск..."
                onChange={handleSearch}
            />
        </div>
    );
}

export default Menu;