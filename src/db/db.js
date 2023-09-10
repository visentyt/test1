import hooka1Img from "../images/hooka1.png";
import pivo1Img from "../images/pivo1.png";
import cocaImg from "../images/coca.png";
import shot1Img from "../images/shot1.png";
import eat1Img from "../images/eat1.png";
import kokteil1Img from "../images/kokteil1.png"

export function getData() {
  return [
    { title: "Кальян", price: 1000, Image: hooka1Img, id: 1, category: "hookah" },
    { title: "Пиво", price: 200, Image: pivo1Img, id: 2, category: "beer" },
    { title: "Шот", price: 300, Image: shot1Img, id: 3, category: "shot" },
    { title: "Кола", price: 139, Image: cocaImg, id: 4, category: "drink" },
    { title: "Сухарики", price: 130, Image: eat1Img, id: 5, category: "eat" },
    { title: "Коктейль", price: 250, Image: kokteil1Img, id: 6, category: "kokteil" },
  ];
}