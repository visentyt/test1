import React, { useState } from "react";
import { getData } from "./db";

const AdminPanel = ({ onAddItem, onDeleteItem }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const handleAddItem = () => {
        onAddItem({ title, price, image, category });
        setTitle("");
        setPrice(0);
        setImage("");
        setCategory("");
    };

    const handleDeleteItem = (id) => {
        onDeleteItem(id);
    };

    return (
        <div>
            <h2>Админ-панель</h2>
            <div>
                <h3>Добавить товар</h3>
                <label>Название:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Цена:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label>Изображение URL:</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                <label>Категория:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Выберите категорию</option>
                    <option value="hookah">Кальян</option>
                    <option value="beer">Пиво</option>
                    <option value="shot">Шот</option>
                    <option value="drink">Напиток</option>
                </select>
                <button onClick={handleAddItem}>Добавить</button>
            </div>
            <div>
                <h3>Удалить товар</h3>
                <label>Выберите товар:</label>
                <select>
                    {getData().map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.title}
                        </option>
                    ))}
                </select>
                <button onClick={handleDeleteItem}>Удалить</button>
            </div>
        </div>
    );
};

export default AdminPanel;