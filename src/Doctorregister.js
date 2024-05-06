import React from "react";
import './Doctorregister.css';
import caduceus from './caduceus (1).png';

function Doctorregister(){
    return(

        <div id="docrigmain">
            <div id="docriginside">

                <label className="docreglab22"><b>Register</b></label><br/><br/>
                <label className="docreglab22">Enter Username</label><br/>
                <input className="docreginp33"></input><br/>
                <label className="docreglab22">Email</label><br/>
                <input className="docreginp33"></input><br/>                
                <label className="docreglab22">Password</label><br/>
                <input type="text" className="docreginp33"></input><br/>
                <label className="docreglab22">Confirm Password</label><br/>
                <input type="text" className="docreginp33"></input><br/><br/>
                <input type="submit" className="docreginp33" value="Register" id="regiddoc12"></input><br/>
            </div>
        </div>
           


       
    )

}

export default Doctorregister;