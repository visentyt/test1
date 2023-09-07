import hooka1Img from "../images/hooka1.png";
import pivo1Img from "../images/pivo1.png";
import cocaImg from "../images/coca.png";
import shot1Img from "../images/shot1.png";

export function getData() {
  return [
    { title: "Кальян", price: 1000, Image: hooka1Img,id:1 },
    { title: "Пиво", price: 200, Image: pivo1Img,id:2 },
    { title: "Шот", price: 300, Image: shot1Img ,id:3},
    { title: "Кола", price: 13.99, Image: cocaImg,id:4 },
  ];
}
