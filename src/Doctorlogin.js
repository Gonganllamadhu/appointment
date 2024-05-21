import axios from 'axios';
import './Doctorlogin.css';
import { useState } from 'react';
import React from "react";
import { json } from 'react-router-dom';

function Doctorlogin({onShowRegisterdoc,setshowdocmyappointments}){
    let [username,setusername] = useState('')
    let [password,setpassword] = useState('')
    let [error,setError] = useState('')

    let doclogin=(e)=>{
        e.preventDefault();
        let data={
            'username' : username,
            'password' : password
        }
        axios.post('http://127.0.0.1:8000/signin/doclogin/',data).then((resp)=>{
            if(resp.status === 200){
                setshowdocmyappointments();
                console.log(resp.status)
                let docdata= JSON.parse(localStorage.getItem('docdata'))
                console.log(docdata)
                let docs=docdata[username]
                localStorage.setItem('docusername',JSON.stringify(docs))
                console.log(docs)
                setshowdocmyappointments();
            }
        }).catch((error) => {
            if (error.response && error.response.status === 400) {
                setError('Invalid username or password');
            } else {
                setError('An error occurred. Please try again later.');
            }
        });
    }
    return(
        <div className="doclogcontainer">
            <div className='loginpage777777'>
            <form onSubmit={doclogin}>
            <b><label><ins>Login User</ins></label></b><br/><br/>
            <label className='docloglabel'>UserName</label><br/>
            <input placeholder='Enter Username' onChange={(e)=>setusername(e.target.value)}  id="docloginp33"></input> <br/>
            <label className='docloglabel'>Password</label><br/>
            <input type='password' placeholder='Password' onChange={(e)=>setpassword(e.target.value)} id="docloginp33"></input><br/><br/>
            <button className='doclogbut' id='btndoclogtt'>Login</button> <br/><br/>
            </form>
            <label className='docloglabel'>New User..?</label><br/>
            <button className='doclogbut'id='btndoclogtt' onClick={onShowRegisterdoc}>Register</button>
            </div>
        </div>
    )
}

export default Doctorlogin