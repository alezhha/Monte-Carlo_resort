import standart from "./360img/standart.jpg";
import family from "./360img/family.jpg";
import lux from "./360img/lux.jpg";

const ROOMS = {
  standart: {
    images: [standart],
    title: "Стандартный номер",
    people: "2-3",
    description:
      "Отличный стандартный номер для проживания самому или с второй половиной.",
    price: 45,
  },
  family: {
    images: [family],
    title: "Семейный номер",
    people: "2-4",
    description:
      "Отличный вариант для небольшой семьи из двух детей и родителей.",
    price: 45,
  },
  lux: {
    images: [lux],
    title: "Люксовый номер",
    people: "1-2",
    description: "Номер для экстренного ощущения комфорта и роскоши.",
    price: 45,
  },
};

export default ROOMS;
