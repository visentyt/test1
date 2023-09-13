import React, { useState } from "react";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleAboutClick = () => {
        alert("Тута"); // Замени на свое действие при нажатии
    };

    return (
        <div className="burger-menu">
            <div className={`burger-menu__icon ${isOpen ? "open" : ""}`} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {isOpen && (
                <div className="burger-menu__content">
                    <button onClick={handleAboutClick}>О нас</button>
                    {/* Добавь другие кнопки меню */}
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;