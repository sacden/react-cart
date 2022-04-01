import React from "react";

export default function Logout(props: any) {
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
