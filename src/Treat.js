import React from 'react'
import './Treat.css'
import Starlogo from './Starlogo.png';
const Treat = () => {
  return (
    <div>
      
   
        <div class="logo-container">
          <img src='https://wallpapercave.com/wp/ThAOKju.jpg' width={1240} height={600}></img>
          
       
        

    <div class="doclogcontainer">

        <h2>Login Form</h2>
        <div id="loginForm">
            <label ><b>Username</b></label><br/>
            <input  type="text" name="username" placeholder="Enter your username" id="docloginp33" /><br/>

            <label ><b>Password</b></label><br/>
            <input  type="Password" name="Password" placeholder="Password" id="docloginp33"/><br/>

            <button id='btndoclogtt'>Login</button><br/>
            Not a user ?<br/>
            <button id='btndoclogtt'>Register</button><br/>
            </div>
          </div>
          <div className="logo-and-text" id='treaticonnamee'>
            <img src={Starlogo} alt="Star Logo" height={200} width={170} />
            <h1 id='starhospitalid'>Star <br/>Hospitals</h1>
          </div>
       
    </div>
</div>

      
   
  )
}

export default Treat
