import './Doctorlogin.css';

import React from "react";

function Doctorlogin(){
    return(
        <div className="docloginpage">
            <div className='loginpage777777'>
            <b><label><ins>Login User</ins></label></b><br/><br/>
            <label className='docloglabel'>Email</label><br/>
            <input placeholder='Email address' className='docloginput'></input> <br/>

            <label className='docloglabel'>Password</label><br/>
            <input type='password' placeholder='Password' className='docloginput'></input><br/><br/>
            <button className='doclogbut'>Login</button> <br/><br/>
            <label className='docloglabel'>New User..?</label><br/>
            <button className='doclogbut'>Register</button>
            </div>
        </div>
    )
}

export default Doctorlogin