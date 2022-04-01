import React, { useState } from "react";
import Logout from "./Logout";

export default function Cart(props: any) {
  const { loggedIn, setLoggedIn } = props;
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <>
      <div className="col-sm-3">
        <div className="card">
          <img src="https://cdn.pixabay.com/photo/2021/01/24/18/10/hamburger-5945987_1280.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Burger</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a href="#" className="btn btn-success" onClick={increase}>
                +
              </a>
              <h3> {count}</h3>
              <a href="#" className={count > 0 ? "btn btn-danger" : "btn btn-secondary"} onClick={decrease}>
                -
              </a>
            </div>
          </div>
        </div>
      </div>
      <Logout setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
    </>
  );
}
