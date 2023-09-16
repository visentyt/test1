import React, { useState } from "react";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Complaints from "./Complaints";
import Vacancies from "./Vacancies";
import Promotions from "./Promotiosns";

function BottomNavigation() {
    const [activeTab, setActiveTab] = useState("aboutUs");

    const handleMenuClick = () => {
        setActiveTab("menu");
    };

    return (
        <div className="bottom-navigation">
            <div
                className={`tab ${activeTab === "aboutUs" ? "active" : ""}`}
                onClick={() => setActiveTab("aboutUs")}
            >
                О нас
            </div>
            <div
                className={`tab ${activeTab === "menu" ? "active" : ""}`}
                onClick={handleMenuClick} // Добавляем обработчик клика на кнопку "Меню"
            >
                Меню
            </div>
            <div
                className={`tab ${activeTab === "complaints" ? "active" : ""}`}
                onClick={() => setActiveTab("complaints")}
            >
                Жалоба
            </div>
            <div
                className={`tab ${activeTab === "vacancies" ? "active" : ""}`}
                onClick={() => setActiveTab("vacancies")}
            >
                Вакансии
            </div>
            <div
                className={`tab ${activeTab === "promotions" ? "active" : ""}`}
                onClick={() => setActiveTab("promotions")}
            >
                Акции
            </div>
            <Menu showCards={showCards} activeTab={activeTab} /> {/* Передаем функцию и активный таб в компонент Menu */}
        </div>
    );
}

export default BottomNavigation;
