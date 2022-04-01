import React from "react";

export default function Login(props: any) {
  const { loggedIn, setLoggedIn } = props;

  const handleClickButton = () => {
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
