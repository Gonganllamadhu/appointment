import React from "react";
import './Doctoropenpage.css';
import pic from './doctor group pic.png'
import pic1 from './caduceus (1).png';

function Doctoropenpage(){
    return(
        <div>
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