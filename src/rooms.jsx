import standart from "./360img/standart.jpg";
import standart2 from "./360img/standart2.jpg";
import family from "./360img/family.jpg";
import family2 from "./360img/family2.jpg";
import lux from "./360img/lux.jpg";
import lux2 from "./360img/lux2.jpg";
import testImg from "./media/test.jpg"
import superlux from "./360img/superlux.jpg";
import superlux2 from "./360img/superlux2.jpg";
import superlux3 from "./360img/superlux3.jpg";
import wc from "./360img/wc.jpg";


export const ROOMS = [
  {
    id: 1,
    pannellum: [standart, standart2, wc],
    image: testImg,
    yaw: [180, 180, 20],
    title: "Стандартный номер",
    people: "2-3",
    price: 60,
    description: "Отличный стандартный номер для проживания самому или с второй половиной.",
  },
  {
    id: 2,
    pannellum: [family, family2, wc],
    image: testImg,
    yaw: [30, 10, 20],
    title: "Семейный номер",
    people: "2-4",
    price: 60,
    description: "Отличный вариант для небольшой семьи из двух детей и родителей.",
  },
  {
    id: 3,
    pannellum: [lux, lux2, wc],
    image: testImg,
    yaw: [0, 1, 20],
    title: "Люксовый номер",
    people: "1-2",
    price: 60,
    description: "Номер для экстренного ощущения комфорта и роскоши.",
  },
  {
    id: 4,
    pannellum: [superlux, superlux2, superlux3],
    image: testImg,
    yaw: [0, 1, 3],
    title: "Президентский номер",
    people: "1-2",
    price: 60,
    description: "Номер для особо важных персон класса VIP.",
  },
]