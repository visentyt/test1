import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const foods = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });

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
  };

  return (
      <>
          <div className="menu">
              <button onClick="openContent('content1')">Коктейли</button>
              <button onClick="openContent('content2')">Пиво</button>
              <button onClick="openContent('content3')">Вино</button>
              <button onClick="openContent('content4')">Игристое вино</button>
              <button onClick="openContent('content5')">Крепкий алкоголь</button>
              <button onClick="openContent('content6')">Шоты</button>
              <button onClick="openContent('content7')">Безалкогольные напитки</button>
          </div>

          <div id="content1" className="content" style="display: none;">
              Коктейли
          </div>
          <div id="content2" className="content" style="display: none;">
              Пиво
          </div>
          <div id="content3" className="content" style="display: none;">
              Вино
          </div>
          <div id="content4" className="content" style="display: none;">
              Игристое вино
          </div>
          <div id="content5" className="content" style="display: none;">
              Крепкий алкоголь
          </div>

          <div id="content6" class="content" style="display: none;">
              Шоты
          </div>

          <div id="content7" class="content" style="display: none;">
              Безалкогольные напитки
          </div>
        <div className="circle-img-container">
          <img className="circle-img" src="https://taplink.st/a/0/c/0/8/4d0981.jpg?4" alt="logo" />
        </div>
        <Cart cartItems={cartItems} onCheckout={onCheckout}/>
        <div className="cards__container">
          {foods.map((food) => {
            return (
                <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
            );
          })}
        </div>
      </>
  );
}

export default App;