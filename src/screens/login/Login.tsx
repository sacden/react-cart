import React from "react";

export default function Login(props: any) {
  const handleClickButton = () => {
    props.setLoggedIn(true);
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
