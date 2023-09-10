import { products, addProduct, deleteProduct } from "./db.js";

// Функция для отображения данных о продуктах в админ-панели
function displayProducts() {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = ""; // Очищаем контейнер перед отображением данных

    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        const imageElement = document.createElement("img");
        imageElement.src = product.Image;
        imageElement.alt = product.title;

        const titleElement = document.createElement("h2");
        titleElement.textContent = product.title;

        const priceElement = document.createElement("p");
        priceElement.textContent = `Цена: ${product.price} руб.`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.addEventListener("click", () => {
            deleteProduct(product.id);
            displayProducts(); // Обновляем отображение после удаления продукта
        });

        productElement.appendChild(imageElement);
        productElement.appendChild(titleElement);
        productElement.appendChild(priceElement);
        productElement.appendChild(deleteButton);

        productsContainer.appendChild(productElement);
    });
}

// Функция для добавления нового продукта
function addNewProduct() {
    const titleInput = document.getElementById("title-input");
    const priceInput = document.getElementById("price-input");
    const imageInput = document.getElementById("image-input");
    const categoryInput = document.getElementById("category-input");

    const newProduct = {
        title: titleInput.value,
        price: parseFloat(priceInput.value),
        Image: imageInput.value,
        id: products.length + 1,
        category: categoryInput.value,
    };

    addProduct(newProduct);
    displayProducts(); // Обновляем отображение после добавления продукта

    // Очищаем поля ввода
    titleInput.value = "";
    priceInput.value = "";
    imageInput.value = "";
    categoryInput.value = "";
}

// Обработчик события для кнопки "Добавить продукт"
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addNewProduct);

// Инициализация отображения данных о продуктах при загрузке страницы
displayProducts();