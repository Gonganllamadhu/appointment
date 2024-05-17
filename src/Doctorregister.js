import React from "react";
import './Doctorregister.css';
import caduceus from './caduceus (1).png';

function Doctorregister(){
    return(

        
        <div class="doclogcontainer">
            <h2>Register Form</h2><br/>
            
                <label for="username"><b>Username</b></label>
                <input  type="text" name="username" placeholder="Enter your username" id="docloginp33"/>
                <label for="username"><b>Email</b></label>
                <input  type="text" name="username" placeholder="Enter your username" id="docloginp33"/>
                <label for="password"><b>Password</b></label>
                <input type="Password" name="Password" placeholder="Password" id="docloginp33"/>
                <label for="password"><b>Confirm Password</b></label>
                <input type="Password" name="Password" placeholder="Password" id="docloginp33"/>
    
                <button id="btndoclogtt">Register</button>
                <p id="errors"></p>
           
        </div>
           


       
    )

}

export default Doctorregister;