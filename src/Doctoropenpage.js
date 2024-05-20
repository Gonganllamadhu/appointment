import React, { useState } from "react";
import Treat from "./Treat";
import Doctorregister from "./Doctorregister";
import Doctorlogin from "./Doctorlogin";

function Doctoropenpage() {
  const [showLogindoc, setShowLogindoc] = useState(true); 

  const handleShowRegisterdoc = () => {
    setShowLogindoc(false); 
  };

  const handleshowlogindoc=()=>{
    setShowLogindoc(true)
  }

  return (
    <div id="logorreg">
      {showLogindoc && <Doctorlogin onShowRegisterdoc={handleShowRegisterdoc} />}
      {!showLogindoc && <Doctorregister setShowLogindoc={handleshowlogindoc}/>}
    </div>
  );
}

export default Doctoropenpage;
