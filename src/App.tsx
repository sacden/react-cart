import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Cart from "./components/cart/Cart";
import Login from "./components/auth/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return <div className="App">{loggedIn ? <Cart setLoggedIn={setLoggedIn} loggedIn={loggedIn} /> : <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}</div>;
}

export default App;
