import React from "react";
import { IAuth } from "../../types/types";

export default function Login(props: IAuth) {
  const { loggedIn, setLoggedIn } = props;

  const handleClickButton = (): void => {
    setLoggedIn(!loggedIn);
  };

  return (
    <>
      <div>Please login</div>
      <button type="button" className="btn btn-success btn-lg" onClick={handleClickButton}>
        Login
      </button>
    </>
  );
}
