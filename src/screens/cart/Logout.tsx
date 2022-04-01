import React from "react";

export default function Logout(props: any) {
  const handleClickButton = () => {
    props.setLoggedIn(false);
  };
  return (
    <>
      <button type="button" className="btn btn-danger btn-lg" onClick={handleClickButton}>
        Logout
      </button>
    </>
  );
}
