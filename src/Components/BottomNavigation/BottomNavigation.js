import React, { useState } from "react";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Complaints from "./Complaints";
import Vacancies from "./Vacancies";
import Promotions from "./Promotions";
import { showCards } from "../../App"

function BottomNavigation() {
    const [activeTab, setActiveTab] = useState("aboutUs");

    const renderTabContent = () => {
        switch (activeTab) {
            case "aboutUs":
                return <AboutUs />;
            case "menu":
                return (
                    <Menu
                        showCards={showCards}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        filteredFoods={filteredFoods}
                        Card={Card}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                );
            case "complaints":
                return <Complaints />;
            case "vacancies":
                return <Vacancies />;
            case "promotions":
                return <Promotions />;
            default:
                return <AboutUs />;
        }
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
                onClick={() => setActiveTab("menu")}
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
            {renderTabContent()}
        </div>
    );
}

export default BottomNavigation;
