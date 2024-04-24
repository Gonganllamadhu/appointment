import './Register.css';
import { useState } from 'react';
import axios from "axios";

function Register({setShowLogin}){
    let [username,setusername] =useState('')
    let [pwd,setpwd] =useState('')
    let [pwd2,setpwd2] =useState('')
    let [email,setemail] = useState('')
    let [error,setError] = useState('')

    let Registeruser=(e)=>{
        e.preventDefault();

        let userdetails={
            'username':username,
            'password':pwd,
            'email':email
        }
        axios.post('http://127.0.0.1:8000/signin/signup/',userdetails).then((resp)=>{
            console.log(resp.data)
        }).catch((error)=>{
            if (error.response && error.response.data && error.response.data.username) {
                if (error.response.data.username[0] === 'A user with that username already exists.') {
                    setError('already exists');
                } else {
                    setError(error.response.data.username[0]);
                }
            } else {
                setError('An error occurred. Please try again.');
            }
        });
    }
    return(
        <div className="box123">
            <div className='content123'>
                <form onSubmit={Registeruser}>
                    <label>Username</label><br/>
                    <input type='text' placeholder='Enter Username' onChange={(d)=>setusername(d.target.value)} required></input> <br/>
                    <label>Email address</label><br/>
                    <input type='text' placeholder='Enter Email address' onChange={(d)=>setemail(d.target.value)} required></input> <br/>
                    <lable>Password</lable><br/>
                    <input type='password' placeholder='Enter password' onChange={(d)=>setpwd(d.target.value)} required ></input> <br/>
                    <lable>Confirm Password</lable><br/>
                    <input type='password' placeholder='Confirm password' onChange={(d)=>setpwd2(d.target.value)} required ></input> <br/><br/>
                    <input id='button' type='submit' value={"register"}/>
                </form>
                {error !='already exists' && <p className="error">{error}</p>}
                {error === 'already exists' && <a onClick={setShowLogin} id='rega'><p style={{color:'red'}}>! already have an account ?</p></a>}            </div>
        </div>
    );
};

export default Register;