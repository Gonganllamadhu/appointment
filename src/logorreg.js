import React, { useState } from "react";
import Login from "./login";
import Register from "./Register";

function Logorreg() {
  const [showLogin, setShowLogin] = useState(true); // State to control which component to display

  const handleShowRegister = () => {
    setShowLogin(false); // Set showLogin to false to hide Login and show Register
  };

  const handleshowlogin=()=>{
    setShowLogin(true)
  }

  return (
    <div>
      {showLogin && <Login onShowRegister={handleShowRegister} />}
      {!showLogin && <Register setShowLogin={handleshowlogin}/>}
    </div>
  );
}

export default Logorreg;
