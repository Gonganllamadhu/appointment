import React, { useState } from "react";
import Treat from "./Treat";
import Doctorregister from "./Doctorregister";

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
      {showLogindoc && <Treat onShowRegisterdoc={handleShowRegisterdoc} />}
      {!showLogindoc && <Doctoropenpage setShowLogindoc={handleshowlogindoc}/>}
    </div>
  );
}

export default Doctoropenpage;
