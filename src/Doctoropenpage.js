import React from "react";
import './Doctoropenpage.css';
import pic from './doctor group pic.png'
import pic1 from './caduceus (1).png';
import Doctorlogin from "./Doctorlogin";
import Doctorregister from "./Doctorregister";

function Doctoropenpage(){
    return(
        <div className="totaldtr1234">
            <div id="doctorlogged"><Doctorregister /></div>
        <div className="docopenpage">
            <center><h1 >WELCOME TO STAR HOSPITAL</h1><br/><br/></center>
            <img src={pic}  width={800} height={400}></img> <br/>
            <div className="aboutdocpage">
    
            </div>

            
        </div>
        
        </div>
    )
}

export default Doctoropenpage;