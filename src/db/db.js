import hooka1Img from "../images/hooka1.png";
import pivo1Img from "../images/pivo1.png";
import cocaImg from "../images/coca.png";
import shot1Img from "../images/shot1.png";

export let products = [
  { title: "Кальян", price: 1000, Image: hooka1Img, id: 1, category: "hookah" },
  { title: "Пиво", price: 200, Image: pivo1Img, id: 2, category: "beer" },
  { title: "Шот", price: 300, Image: shot1Img, id: 3, category: "shot" },
  { title: "Кола", price: 139, Image: cocaImg, id: 4, category: "drink" },
];

export function addProduct(product) {
  products.push(product);
}

export function deleteProduct(productId) {
  products = products.filter((product) => product.id !== productId);
}