import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Cart from "./screens/cart/Cart";
import Login from "./screens/login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return <div className="App">{loggedIn ? <Cart setLoggedIn={setLoggedIn} /> : <Login setLoggedIn={setLoggedIn} />}</div>;
}

export default App;
