import './Register.css';
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';


function Register({setShowLogin}){
    let [username,setusername] =useState('')
    let [pwd,setpwd] =useState('')
    let [pwd2,setpwd2] =useState('')
    let [email,setemail] = useState('')
    let [phone,setphone] = useState('')
    let [error,setError] = useState('')
    let [passError,setpassError] = useState('')
    let [emailerror,setemailerror] = useState('')

    let handlePassword = (event) => {
        const value = event.target.value;
        setpwd2(value);
        if (value !== pwd) {
            setpassError("Passwords don't match");
        } else {
            setpassError('');
        }
    };

    let Registeruser=(e)=>{
        e.preventDefault();
        let userdetails={
            'username':username,
            'password':pwd,
            'email':email,
            'phoneno':phone,
        }

        axios.post('http://127.0.0.1:8000/signin/signup/',userdetails).then((resp)=>{
            if (resp.status == 200){
                let phoneno=resp.data.phoneno;
                console.log(phoneno)
                localStorage.setItem('mobilenumber',phoneno)
                setShowLogin();

            }
            console.log(resp.data)
        

        }).catch((error)=>{
            if (error.response && error.response.data && error.response.data.username) {
                if (error.response.data.username[0] === 'A user with that username already exists.') {
                    setError('already exists');
                    if (error.response.data.email) {
                        setError(error.response.data.email[0]);
                    }
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
                    <h2>Register</h2>
                    <label>Username</label><br/>
                    <input id='docloginp33' type='text' placeholder='Enter Username' onChange={(d)=>setusername(d.target.value)} required></input> <br/>
                    <label>Email address</label><br/>

                    <input  id='docloginp33' type='text' placeholder='Enter Email address' onChange={(d)=>setemail(d.target.value)} required></input> <br/>

                    <input type='text' placeholder='Enter Email address' onChange={(d)=>setemail(d.target.value)} required></input> <br/>
                    <label>Phone Number</label><br/>
                    <input id='docloginp33' type='text' placeholder='Enter Phonenumber' onChange={(d)=>setphone(d.target.value)} required></input> <br/>

                    <lable>Password</lable><br/>
                    <input  id='docloginp33' type='password' placeholder='Enter password' onChange={(d)=>setpwd(d.target.value)} required ></input> <br/>
                    <lable>Confirm Password</lable><br/>

                    <input id='docloginp33' type='password' placeholder='Confirm password' onChange={(d)=>setpwd2(d.target.value)} required ></input> <br/><br/>
                    <input id='btndoclogtt' type='submit' value={"register"}/>

                    <input type='password' placeholder='Confirm password' onChange={handlePassword} required ></input> <br/><br/>
                    {passError == "Passwords don't match" && <p id='p11' style={{color:'red'}}>Password don't match</p> }
                    <input id='button' type='submit' value={"register"}/>

                </form>
                {error !='already exists' && <p className="error">{error}</p>}
                {error === 'already exists' && <a onClick={setShowLogin} id='rega'><p style={{color:'red'}}>! already have an account </p></a>}            
            </div>
        </div>
    );
};

export default Register;