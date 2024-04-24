import './Doctorlogin.css';

import React from "react";

function Doctorlogin(){
    return(
        <div className="docloginpage">
            <b><label>Login User</label></b><br/><br/>
            <label className='docloglabel'>Employee ID</label><br/>
            <input placeholder='Employee ID' className='docloginput'></input> <br/>

            <label className='docloglabel'>Password</label><br/>
            <input type='password' placeholder='Password' className='docloginput'></input><br/><br/>
            <button className='doclogbut'>Login</button> <br/><br/>
            <label className='docloglabel'>New User..?</label><br/>
            <button className='doclogbut'>Register</button>
        </div>
    )
}

export default Doctorlogin