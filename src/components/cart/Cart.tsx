import React, { useState } from "react";
import { IAuth, IProduct } from "../../types/types";
import Logout from "../auth/Logout";
import Products from "./Products";

export default function Cart(props: IAuth) {
  const { loggedIn, setLoggedIn } = props;

  const allProducts: IProduct[] = [
    {
      id: 1,
      name: "Burger",
      img: "https://cdn.pixabay.com/photo/2021/01/24/18/10/hamburger-5945987_1280.png",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content",
      value: 0,
    },
    {
      id: 2,
      name: "Cheese",
      img: "https://cdn.pixabay.com/photo/2020/03/19/07/15/cheese-4946581_1280.png",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content",
      value: 0,
    },
    {
      id: 3,
      name: "Milk",
      img: "https://cdn.pixabay.com/photo/2019/06/06/06/31/milk-4255262_1280.png",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content",
      value: 0,
    },
    {
      id: 4,
      name: "Icecream",
      img: "https://cdn.pixabay.com/photo/2020/05/17/12/16/ice-cream-5181345_1280.png",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content",
      value: 0,
    },
  ];

  const [count, setCount] = useState(allProducts);

  const increase = (identificator: number) => {
    const newCount = [...count];
    const elementIndex = newCount.findIndex((c) => c.id === identificator);
    newCount[elementIndex].value++;
    setCount(newCount);
  };

  const decrease = (identificator: number) => {
    const newCount = [...count];
    const elementIndex = newCount.findIndex((c) => c.id === identificator);
    if (newCount[elementIndex].value > 0) {
      newCount[elementIndex].value--;
      setCount(newCount);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {count.map((product: IProduct, index: number) => (
          <Products increase={increase} decrease={decrease} product={product} key={index} />
        ))}
      </div>
      <Logout setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
    </>
  );
}
