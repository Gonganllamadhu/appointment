import React, { useState } from "react";
import Login from "./login";
import Register from "./Register";

function Logorreg() {
  const [showLogin, setShowLogin] = useState(true); 

  const handleShowRegister = () => {
    setShowLogin(false); 
  };

  const handleshowlogin=()=>{
    setShowLogin(true)
  }

  return (
    <div id="logorreg">
      {showLogin && <Login onShowRegister={handleShowRegister} />}
      {!showLogin && <Register setShowLogin={handleshowlogin}/>}
    </div>
  );
}

export default Logorreg;
