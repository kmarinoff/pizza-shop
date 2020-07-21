import dillSalmon from "src/assets/order-book/kebabs/dill-salmon.jpg";
import greekShrimp from "src/assets/order-book/kebabs/greek-shrimp.jpg";
import potatoMushroomKebabs from "src/assets/order-book/kebabs/potato-mushroom-kebabs.jpg";
import rajmaKeKebab from "src/assets/order-book/kebabs/rajma-ke-kebab.jpg";
import seekhKebabs from "src/assets/order-book/kebabs/seekh-kebabs.jpg";

// eslint-disable-next-line import/prefer-default-export
export const kebabsArray: Array<{
  id: number;
  name: string;
  imgSrc: string;
  price: number;
}> = [
  {
    id: 1,
    name: "Potato Mushroom Kebabs",
    imgSrc: potatoMushroomKebabs,
    price: 15.0,
  },
  {
    id: 2,
    name: "Greek Shrimp",
    imgSrc: greekShrimp,
    price: 17.0,
  },
  {
    id: 3,
    name: "Dill Salmon",
    imgSrc: dillSalmon,
    price: 17.0,
  },
  {
    id: 4,
    name: "Rajma Ke Kebab",
    imgSrc: rajmaKeKebab,
    price: 22.0,
  },
  {
    id: 5,
    name: "Seekh Kebabs",
    imgSrc: seekhKebabs,
    price: 22.0,
  },
];
