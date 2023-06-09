import standart from "./360img/standart.jpg";
import family from "./360img/family.jpg";
import lux from "./360img/lux.jpg";

export const ROOMS = [
  {
    pannellum: standart,
    yaw: 180,
    title: "Стандартный номер",
    people: "2-3",
    price: 60,
    description: "Отличный стандартный номер для проживания самому или с второй половиной.",
  },
  {
    pannellum: family,
    yaw: 30,
    title: "Семейный номер",
    people: "2-4",
    price: 60,
    description: "Отличный вариант для небольшой семьи из двух детей и родителей.",
  },
  {
    pannellum: lux,
    yaw: 0,
    title: "Люксовый номер",
    people: "1-2",
    price: 60,
    description: "Номер для экстренного ощущения комфорта и роскоши.",
  },
]