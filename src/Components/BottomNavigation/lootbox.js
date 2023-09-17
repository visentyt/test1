import React, { useState } from "react";
import "./lootbox.css";

function Lootbox() {
    const [isOpen, setIsOpen] = useState(false);
    const [result, setResult] = useState("");

    const items = [
        { name: "Кальян", image: "../../images/hooka1.png", chance: 0.2 },
        { name: "Кола", image: "../../images/coca.png", chance: 0.2 },
        // Добавьте другие предметы здесь
    ];

    const openLootbox = () => {
        const random = Math.random();
        let totalChance = 0;

        for (const item of items) {
            totalChance += item.chance;
            if (random <= totalChance) {
                setResult(`Поздравляем! Вы выиграли: ${item.name}`);
                setIsOpen(true);
                break;
            }
        }
    };

    const resetLootbox = () => {
        setIsOpen(false);
        setResult("");
    };

    return (
        <div>
            {isOpen ? (
                <div>
                    <div>Результат: {result}</div>
                    <button onClick={resetLootbox}>Забрать</button>
                </div>
            ) : (
                <div>
                    <button onClick={openLootbox}>Открыть лутбокс</button>
                </div>
            )}
        </div>
    );
}

export default Lootbox;
