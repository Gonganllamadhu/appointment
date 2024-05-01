import React from "react";
import './Doctorregister.css';
import caduceus from './caduceus (1).png';

function Doctorregister(){
    return(

        <div id="docrigmain">
            <div id="docriginside">

                <label className="docreglab22"><b><ins>Register</ins></b></label><br/><br/>
                <label className="docreglab22">Enter Username</label><br/>
                <input className="docreginp33"></input><br/>
                <label className="docreglab22">Email</label><br/>
                <input className="docreginp33"></input><br/>
                <label className="docreglab22">Password</label><br/>
                <input type="text" className="docreginp33"></input><br/>
                <label className="docreglab22">Confirm Password</label><br/>
                <input className="docreginp33"></input><br/><br/>
                <button id="docrigbut44">Register</button>

            </div>
        </div>
           


       
    )

}

export default Doctorregister;