import capricioasa from "src/assets/order-book/pizzas/capricioasa.jpg";
import chickenGrill from "src/assets/order-book/pizzas/chicken-grill.jpg";
import diablo from "src/assets/order-book/pizzas/diablo.jpg";
import mario from "src/assets/order-book/pizzas/mario.jpg";
import neapolitana from "src/assets/order-book/pizzas/neapolitana.jpg";
import pepperoni from "src/assets/order-book/pizzas/pepperoni.jpg";
import primavera from "src/assets/order-book/pizzas/primavera.jpg";
import rancho from "src/assets/order-book/pizzas/rancho.jpg";
import supreme from "src/assets/order-book/pizzas/supreme.jpg";
import tuna from "src/assets/order-book/pizzas/tuna.jpg";

// eslint-disable-next-line import/prefer-default-export
export const pizzasArray: Array<{
  id: number;
  name: string;
  imgSrc: string;
  price: number;
}> = [
  {
    id: 1,
    name: 'Pizza "Chicken Grill"',
    imgSrc: chickenGrill,
    price: 15.0,
  },
  {
    id: 2,
    name: "Mario",
    imgSrc: mario,
    price: 12.0,
  },
  {
    id: 3,
    name: "Capricioasa",
    imgSrc: capricioasa,
    price: 12.5,
  },
  {
    id: 4,
    name: "Tuna",
    imgSrc: tuna,
    price: 9.0,
  },
  {
    id: 5,
    name: "Diablo",
    imgSrc: diablo,
    price: 13.0,
  },
  {
    id: 6,
    name: "Pepperoni",
    imgSrc: pepperoni,
    price: 10.0,
  },
  {
    id: 7,
    name: "Supreme",
    imgSrc: supreme,
    price: 14.0,
  },
  {
    id: 8,
    name: "Rancho",
    imgSrc: rancho,
    price: 12.0,
  },
  {
    id: 9,
    name: "Primavera",
    imgSrc: primavera,
    price: 11.0,
  },
  {
    id: 10,
    name: "Neapolitana",
    imgSrc: neapolitana,
    price: 9.0,
  },
];
