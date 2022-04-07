import React from "react";
import { IAuth } from "../../types/types";

export default function Logout(props: IAuth) {
  const { loggedIn, setLoggedIn } = props;

  const handleClickButton = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <>
      <button type="button" className="btn btn-danger btn-lg" onClick={handleClickButton}>
        Logout
      </button>
    </>
  );
}
