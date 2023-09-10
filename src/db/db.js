import hooka1Img from "../images/hooka1.png";
import pivo1Img from "../images/pivo1.png";
import cocaImg from "../images/coca.png";
import shot1Img from "../images/shot1.png";

export const database = [
  { title: "Кальян", price: 1000, Image: hooka1Img, id: 1, category: "hookah" },
  { title: "Пиво", price: 200, Image: pivo1Img, id: 2, category: "beer" },
  { title: "Шот", price: 300, Image: shot1Img, id: 3, category: "shot" },
  { title: "Кола", price: 139, Image: cocaImg, id: 4, category: "drink" },
];

export function getData() {
  const savedData = localStorage.getItem("database");
  if (savedData) {
    return JSON.parse(savedData);
  }
  return database;
}

export function addFood(newFood) {
  const lastId = database.length > 0 ? database[database.length - 1].id : 0;
  const newFoodWithId = { ...newFood, id: lastId + 1 };
  database.push(newFoodWithId);
}

export function deleteFood(foodId) {
  const index = database.findIndex((food) => food.id === foodId);
  if (index !== -1) {
    database.splice(index, 1);
  }
}

export function saveData(database) {
  localStorage.setItem("database", JSON.stringify(database));
}