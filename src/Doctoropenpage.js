import React, { useState } from "react";
import Treat from "./Treat";
import Doctorregister from "./Doctorregister";
import Doctorlogin from "./Doctorlogin";

function Doctoropenpage({setshowdocsappo}) {
  const [showLogindoc, setShowLogindoc] = useState(true); 

  const handleShowRegisterdoc = () => {
    setShowLogindoc(false); 
  };

  const handleshowlogindoc=()=>{
    setShowLogindoc(true)
  }

  const showdocsappo=()=>{
    console.log('docapposhow')
    setshowdocsappo();
  }

  return (
    <div id="logorreg">
      <div>
      <img src='https://wallpapercave.com/wp/ThAOKju.jpg' width={1240} height={600}></img></div>
      <div id="doclogorreg667788">
      {showLogindoc && <Doctorlogin onShowRegisterdoc={handleShowRegisterdoc} setshowdocmyappointments={showdocsappo}/>}
      {!showLogindoc && <Doctorregister setShowLogindoc={handleshowlogindoc}/>}
      </div>
    </div>
  );
}

export default Doctoropenpage;
