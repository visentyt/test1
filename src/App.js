import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import { getData } from "./db/db";


const tele = window.Telegram.WebApp;
const [menuOpen, setMenuOpen] = useState(false);
const [selectedPage, setSelectedPage] = useState(null);
const openMenu = () => {
    setMenuOpen(true);
};

const closeMenu = () => {
    setMenuOpen(false);
};

const selectPage = (page) => {
    setSelectedPage(page);
};
function App() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        tele.ready();
    });
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchKeyword] = useState("");



    const foods = getData();

    const onAdd = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...food, quantity: 1 }]);
        }
    };

    const onRemove = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter((x) => x.id !== food.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
                )
            );
        }
    };


    const onCheckout = () => {
        tele.MainButton.text = "Оплатить";
        tele.MainButton.show();
        tele.MainButton.textColor = "#ffffff";
        tele.MainButton.color = "#A9A9A9"; //изменяем цвет бэкграунда кнопки
    };

    const filterFoodsByCategory = (category) => {
        if (category === null) {
            return foods;
        } else {
            return foods.filter((food) => food.category === category);
        }
    };



    const filteredFoods = searchKeyword
        ? foods.filter((food) =>
            food.title.toLowerCase().includes(searchKeyword.toLowerCase())
        )
        : filterFoodsByCategory(activeCategory);

    const showCards = (category) => {
        setActiveCategory(category);
    };

    return (
        <>
            <div className={`burger-menu ${menuOpen ? 'open' : ''}`}>
                <div className="burger-icon" onClick={openMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {menuOpen && (
                    <div className="menu">
                        <button className={`menu-item ${selectedPage === 'about' ? 'selected' : ''}`} onClick={() => selectPage('about')}>
                            О нас
                        </button>
                        <button className={`menu-item ${selectedPage === 'menu' ? 'selected' : ''}`} onClick={() => selectPage('menu')}>
                            Меню
                        </button>
                    </div>
                )}
            </div>
            <Cart cartItems={cartItems} onCheckout={onCheckout} />
            {selectedPage === 'about' && <div>лол</div>}
            {selectedPage === 'menu' && <div>попа</div>}
            <div id="menu">
                <div className="menu-item" onClick={() => showCards(null)}>
                    Все
                </div>
                <div className="menu-item" onClick={() => showCards("hookah")}>
                    Кальян
                </div>
                <div className="menu-item" onClick={() => showCards("beer")}>
                    Пиво
                </div>
                <div className="menu-item" onClick={() => showCards("shot")}>
                    Шоты
                </div>
                <div className="menu-item" onClick={() => showCards("drink")}>
                    Напитки
                </div>
                <div className="menu-item" onClick={() => showCards("eat")}>
                    Закуски
                </div>
                <div className="menu-item" onClick={() => showCards("kokteil")}>
                    Коктейли
                </div>

            </div>
            <div className="cards__container">
                {filteredFoods.map((food) => (
                    <Card key={food.id} food={food} onAdd={onAdd} onRemove={onRemove} />
                ))}
            </div>
        </>
    );
}

export default App;