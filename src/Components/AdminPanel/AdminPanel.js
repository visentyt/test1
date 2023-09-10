import React, { useState } from "react";
import "./AdminPanel.css";

function AdminPanel({ database, updateDatabase, setActiveCategory }) {
    const [newFood, setNewFood] = useState({
        title: "",
        price: 0,
        Image: "",
        id: 0,
        category: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewFood((prevFood) => ({ ...prevFood, [name]: value }));
    };

    const handleAddFood = () => {
        const newFoodWithId = { ...newFood, id: database.length + 1 };
        updateDatabase([...database, newFoodWithId]);
        setNewFood({ title: "", price: 0, Image: "", id: 0, category: "" });
    };

    const handleDeleteFood = (foodId) => {
        updateDatabase(database.filter((food) => food.id !== foodId));
    };

    const handleReturnToMenu = () => {
        setActiveCategory(null);
    };

    return (
        <div className="admin-panel">
            <h2>Админ-панель</h2>
            <div className="food-form">
                <h3>Добавить новый продукт:</h3>
                <input
                    type="text"
                    name="title"
                    placeholder="Название"
                    value={newFood.title}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Цена"
                    value={newFood.price}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="Image"
                    placeholder="URL изображения"
                    value={newFood.Image}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Категория"
                    value={newFood.category}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddFood}>Добавить</button>
            </div>
            <div className="food-list">
                <h3>Список продуктов:</h3>
                <ul>
                    {database.map((food) => (
                        <li key={food.id}>
                            {food.title} - {food.price}₽{" "}
                            <button onClick={() => handleDeleteFood(food.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleReturnToMenu} className="return-button">
                Вернуться к меню
            </button>
        </div>
    );
}

export default AdminPanel;