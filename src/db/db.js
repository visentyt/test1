import hooka1Img from "../images/hooka1.png";
import pivo1Img from "../images/pivo1.png";
import cocaImg from "../images/coca.png";
import shot1Img from "../images/shot1.png";

export let data = [
  { title: "Кальян", price: 1000, image: hooka1Img, id: 1, category: "hookah" },
  { title: "Пиво", price: 200, image: pivo1Img, id: 2, category: "beer" },
  { title: "Шот", price: 300, image: shot1Img, id: 3, category: "shot" },
  { title: "Кола", price: 139, image: cocaImg, id: 4, category: "drink" },
];

export function getData() {
  return data;
}

export function addItem(item) {
  data.push({
    title: item.title,
    price: item.price,
    image: item.image,
    id: data.length + 1,
    category: item.category,
  });
}

export function deleteItem(id) {
  data = data.filter((item) => item.id !== id);
}