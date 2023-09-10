import React, { useState, useEffect } from "react";
import "./AdminPanel.css";
import { getData, updateData } from "../db/db";

function AdminPanel() {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        setDatabase(getData());
    }, []);

    const handleInputChange = (event) => {
        // код обработки изменений ввода
    };

    const handleAddFood = () => {
        const lastId = database.length > 0 ? database[database.length - 1].id : 0;
        const newFoodWithId = { ...newFood, id: lastId + 1 };

        const updatedDatabase = [...database, newFoodWithId];
        setDatabase(updatedDatabase);
        updateData(updatedDatabase);

        setNewFood({
            title: "",
            price: 0,
            image: "",
            category: ""
        });
    };

    const handleDeleteFood = (foodId) => {
        const updatedDatabase = database.filter((food) => food.id !== foodId);
        setDatabase(updatedDatabase);
        updateData(updatedDatabase);
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
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
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
        </div>
    );
}

export default AdminPanel;