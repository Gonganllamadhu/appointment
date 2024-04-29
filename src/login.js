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
            <div className="content">
                <form onSubmit={loginuser}>
                    <label>Username</label> <br/>
                    <input type="text" placeholder="Enter you username" onChange={(d)=>setusername(d.target.value)} ></input><br/>
                    <label>Password</label> <br/>
                    <input type="password" placeholder="Enter your password" onChange={(d)=>setpwd(d.target.value)}></input><br></br>
                    <h6><a href="#">Forgot password ?</a></h6><br/>
                    <input id="button" type="submit" value={"sigin"} ></input><br/>
                </form>
                {error && <p className="error">{error}</p>}
                <label id="l1">Not a User ?</label> <br/>
                <button id="button" onClick={onShowRegister}>Register</button>
            </div>
        </div>
    );
}
export default Login;