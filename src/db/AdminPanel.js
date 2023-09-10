import React, { useState } from "react";
import { getData } from "./db";

function AdminPanel() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleAddProduct = () => {
        const newProduct = {
            title: title,
            price: price,
            Image: image,
            id: getData().length + 1,
            category: category,
        };

        // Добавляем новый продукт в данные
        getData().push(newProduct);

        // Очищаем поля ввода
        setTitle("");
        setPrice("");
        setImage("");
        setCategory("");
    };

    const handleDeleteProduct = (id) => {
        // Удаляем продукт по его id
        const index = getData().findIndex((product) => product.id === id);
        if (index !== -1) {
            getData().splice(index, 1);
        }
    };

    return (
        <div className="admin-panel">
            <h2>Админ-панель</h2>
            <div>
                <label>Название продукта:</label>
                <input type="text" value={title} onChange={handleTitleChange} />
            </div>
            <div>
                <label>Цена:</label>
                <input type="number" value={price} onChange={handlePriceChange} />
            </div>
            <div>
                <label>Изображение:</label>
                <input type="text" value={image} onChange={handleImageChange} />
            </div>
            <div>
                <label>Категория:</label>
                <input type="text" value={category} onChange={handleCategoryChange} />
            </div>
            <button onClick={handleAddProduct}>Добавить продукт</button>

            <h3>Существующие продукты:</h3>
            <ul>
                {getData().map((product) => (
                    <li key={product.id}>
                        <span>{product.title}</span>
                        <span>{product.price}</span>
                        <img src={product.Image} alt={product.title} />
                        <button onClick={() => handleDeleteProduct(product.id)}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminPanel;