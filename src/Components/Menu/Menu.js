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

    // Функция пролистывания пальцем вправо или влево
    const handleTouchMove = (event) => {
        if (menuRef.current) {
            const touch = event.touches[0];
            const touchX = touch.clientX;
            const menuRect = menuRef.current.getBoundingClientRect();
            const menuCenterX = menuRect.left + menuRect.width / 2;

            if (touchX > menuCenterX) {
                // Пролистывание вправо
                menuRef.current.scrollLeft += 10;
            } else {
                // Пролистывание влево
                menuRef.current.scrollLeft -= 10;
            }
        }
    };

    return (
        <div className="menu-wrapper">
            <div className="menu" ref={menuRef} onTouchMove={handleTouchMove}>
                <button onClick={() => handleCategoryClick(null)}>Все</button>
                <button onClick={() => handleCategoryClick("hookah")}>Кальян</button>
                <button onClick={() => handleCategoryClick("beer")}>Пиво</button>
                <button onClick={() => handleCategoryClick("shot")}>Шоты</button>
                <button onClick={() => handleCategoryClick("beer")}>Пиво</button>
                <button onClick={() => handleCategoryClick("shot")}>Шоты</button>
                <button onClick={() => handleCategoryClick("beer")}>Пиво</button>
                <button onClick={() => handleCategoryClick("shot")}>Шоты</button>
                <button onClick={() => handleCategoryClick("beer")}>Пиво</button>
                <button onClick={() => handleCategoryClick("shot")}>Шоты</button>              <button onClick={() => handleCategoryClick("beer")}>Пиво</button>
                <button onClick={() => handleCategoryClick("shot")}>Шоты</button>

                {/* Добавьте другие кнопки для остальных категорий */}
            </div>
            {/* Удалите кнопки menu-navigation */}
            <input
                type="text"
                placeholder="Поиск..."
                onChange={handleSearch}
            />
        </div>
    );
}

export default Menu;