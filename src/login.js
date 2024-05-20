import axios from "axios";
import "./login.css"
import { useState } from "react";


function Login({onShowRegister}){
    let [username, setusername] = useState('');
    let [pwd, setpwd] = useState('');
    let [error, setError] = useState('');

    let loginuser=(e)=>{
        e.preventDefault();
        let userdetails={
            'username':username,
            'password':pwd
        }
        
        const config = {

            headers: {
                'Content-Type': 'application/json' 
            }
        };

        axios.post('http://127.0.0.1:8000/signin/login/',userdetails,config).then((resp) => {
            console.log(resp.data);
            let token = resp.data.token;
            localStorage.setItem('token', token);
            window.location.reload();
           
            if (resp.status= 200){
                let userdata = JSON.parse(localStorage.getItem('userdata'));
                console.log(userdata)
                console.log(username)
                let phonenum = userdata[username];
                console.log(phonenum)
                localStorage.setItem('mobilenumber',JSON.stringify(phonenum))
                console.log(phonenum)
            }

        }).catch((error) => {
            console.log('Error:', error);
            if (error.response && error.response.status === 400) {
                setError('Invalid username or password');
                console.log('Error Data:', error.response.data); 
            } else {
                setError('An error occurred. Please try again later.');
            }
        });
        
    }
    return(
        <div className="login">
            <div className="doclogco">
                <form onSubmit={loginuser}>
                    
                    <h2>Login Form</h2>+
                    <label>Username</label> <br/>
                    <input type="text" placeholder="Enter you username" onChange={(d)=>setusername(d.target.value)}  id="docloginp33"></input><br/>
                    <label>Password</label> <br/>
                    <input type="password" placeholder="Enter your password" onChange={(d)=>setpwd(d.target.value)} id="docloginp33"></input><br></br>
                    <h6><a href="#">Forgot password ?</a></h6><br/>
                    <button id="btndoclogtt" type="submit" value={"sigin"} >Login</button><br/>
                </form>
                {error && <p className="error">{error}</p>}
                <label id="l1">Not a User ?</label> <br/>
                <button id="btndoclogtt" onClick={onShowRegister}>Register</button>
            </div>
        </div>
    );
}
export default Login;