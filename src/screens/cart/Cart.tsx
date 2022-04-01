import React from "react";
import Logout from "./Logout";

export default function Cart(props: any) {
  const { setLoggedIn } = props;
  return (
    <>
      <div>Cart</div>
      <Logout setLoggedIn={setLoggedIn} />
    </>
  );
}
