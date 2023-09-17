import React, { useState, useRef } from "react";
import "./Lootbox.css"; // Создайте файл стилей с именем Lootbox.css

function Lootbox() {
    const [isOpen, setIsOpen] = useState(false);
    const [result, setResult] = useState("");
    const lootboxRef = useRef(null);

    const items = [
        { name: "Кальян", image: "../../images/hooka1.png", chance: 0.2 },
        { name: "Кола", image: "../../images/coca.png", chance: 0.2 },
        // Добавьте другие предметы здесь
    ];

    const spinLootbox = () => {
        setIsOpen(true);

        const random = Math.random();
        let totalChance = 0;

        for (const item of items) {
            totalChance += item.chance;
            if (random <= totalChance) {
                setResult(`Поздравляем! Вы выиграли: ${item.name}`);
                break;
            }
        }

        lootboxRef.current.style.animation = "spin 3s ease-in-out forwards";
    };

    const resetLootbox = () => {
        setIsOpen(false);
        setResult("");
        lootboxRef.current.style.animation = ""; // Сброс анимации
    };

    return (
        <div>
            <div>Promotions</div>
            {isOpen ? (
                <div>
                    <div>Результат: {result}</div>
                    <button onClick={resetLootbox}>Забрать</button>
                </div>
            ) : (
                <div>
                    <button onClick={spinLootbox}>Открыть лутбокс</button>
                </div>
            )}
            <div className="lootbox" ref={lootboxRef}>
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={item.image} alt={item.name} />
                        <p className="item-name">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Lootbox;
