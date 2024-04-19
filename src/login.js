import "./login.css"
import { useNavigate } from "react-router-dom";
import Register from "./Register";


function Login({onShowRegister}){
    return(
        <div className="login">
            <div className="content">
            <label>Username</label> <br/>
            <input type="text" placeholder="Enter you username"/><br/>
            <label>Password</label> <br/>
            <input type="password" placeholder="Enter your password"></input><br></br>
            <h6><a href="#">Forgot password ?</a></h6><br/>
            <button>Login</button><br/>
            <label id="l1">Not a User ?</label> <br/>
            <button id="register" onClick={onShowRegister}>Register</button>
            </div>
        </div>
    );
}
export default Login;