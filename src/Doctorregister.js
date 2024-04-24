import React from "react";
import './Doctorregister.css';
import caduceus from './caduceus (1).png';

function Doctorregister(){
    return(

        <div id="docrigmain">
            <div id="docriginside">
                <label className="docreglab22"><b>Register</b></label><br/><br/>
                <label className="docreglab22">Name</label><br/>
                <input className="docreginp33"></input><br/>
                <label className="docreglab22">Speciality</label><br/>
                <input className="docreginp33"></input><br/>
                <label className="docreglab22">Hospital Name</label><br/>
                <input className="docreginp33"></input><br/>
                <label className="docreglab22">Email</label><br/>
                <input className="docreginp33"></input><br/>
                <label className="docreglab22">Phone</label><br/>
                <input className="docreginp33"></input><br/>
                <label className="docreglab22">Employee ID</label><br/>
                <input className="docreginp33"></input><br/>
                <label className="docreglab22">Password</label><br/>
                <input className="docreginp33"></input><br/>
                <label className="docreglab22">Confirm Password</label><br/>
                <input className="docreginp33"></input><br/>
                <button id="docrigbut44">Register</button>

            </div>
            <div>
            <center><img src={caduceus} width={200} height={200}></img></center><br/>
            <center>Star Hospital</center>
            </div>


        </div>
    )

}

export default Doctorregister;