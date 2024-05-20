import './Doctorlogin.css';

import React from "react";

function Doctorlogin(){
    return(
        <div className="doclogcontainer">
            <div className='loginpage777777'>
            <b><label><ins>Login User</ins></label></b><br/><br/>
            <label className='docloglabel'>Email</label><br/>
            <input placeholder='Email address'  id="docloginp33"></input> <br/>

            <label className='docloglabel'>Password</label><br/>
            <input type='password' placeholder='Password'  id="docloginp33"></input><br/><br/>
            <button className='doclogbut' id='btndoclogtt'>Login</button> <br/><br/>
            <label className='docloglabel'>New User..?</label><br/>
            <button className='doclogbut'id='btndoclogtt' >Register</button>
            </div>
        </div>
    )
}

export default Doctorlogin