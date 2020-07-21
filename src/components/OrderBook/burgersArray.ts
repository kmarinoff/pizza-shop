import baconAndCheeseQuarterPounder from "src/assets/order-book/burgers/bacon-and-cheese-quarter-pounder.jpg";
import baconClubhouseBurger from "src/assets/order-book/burgers/bacon-clubhouse-burger.jpg";
import baconHabaneroRanchQuarterPounder from "src/assets/order-book/burgers/bacon-habanero-ranch-quarter-pounder.jpg";
import bigMac from "src/assets/order-book/burgers/big-mac.jpg";
import deluxeQuarterPounder from "src/assets/order-book/burgers/deluxe-quarter-pounder.jpg";
import doubleQuarterPounderWithCheese from "src/assets/order-book/burgers/double-quarter-pounder-with-cheese.jpg";
import mcDouble from "src/assets/order-book/burgers/mc-double.jpg";
import quarterPounderWithCheese from "src/assets/order-book/burgers/quarter-pounder-with-cheese.jpg";

// eslint-disable-next-line import/prefer-default-export
export const burgersArray: Array<{
  id: number;
  name: string;
  imgSrc: string;
  price: number;
}> = [
  {
    id: 1,
    name: "Big Mac",
    imgSrc: bigMac,
    price: 9.0,
  },
  {
    id: 2,
    name: "Quarter Pounder with Cheese",
    imgSrc: quarterPounderWithCheese,
    price: 6.0,
  },
  {
    id: 3,
    name: "Bacon Clubhouse Burger",
    imgSrc: baconClubhouseBurger,
    price: 6.0,
  },
  {
    id: 4,
    name: "Bacon Habanero Ranch Quarter Pounder",
    imgSrc: baconHabaneroRanchQuarterPounder,
    price: 8.0,
  },
  {
    id: 5,
    name: "Bacon & Cheese Quarter Pounder",
    imgSrc: baconAndCheeseQuarterPounder,
    price: 5.0,
  },
  {
    id: 6,
    name: "Deluxe Quarter Pounder",
    imgSrc: deluxeQuarterPounder,
    price: 7.0,
  },
  {
    id: 7,
    name: "Double Quarter Pounder with Cheese",
    imgSrc: doubleQuarterPounderWithCheese,
    price: 10.0,
  },
  {
    id: 8,
    name: "McDouble",
    imgSrc: mcDouble,
    price: 8.0,
  },
];
