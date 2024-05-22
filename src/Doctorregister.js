import React, { useState } from "react";
import axios from "axios";

function Doctorregister({ setShowLogindoc }) {
    const [dname, setdname] = useState('');
    const [demail, setdemail] = useState('');
    const [dpass, setdpass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, seterror] = useState('');

    const handledocemail = (event) => {
        setdemail(event.target.value);
        validateemail(event.target.value);
    };
   
   

    const validateemail = (email) => {
        const regemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regemail.test(email)) {
            seterror('Enter a valid email address');
            return false;
        } else {
            seterror('');
            return true;
        }
    };



    const docregister = (e) => {
        e.preventDefault();
        if (dpass !== confirmPass) {
            seterror("Passwords do not match");
            return;
        }
        let docdetails = {
            'username': dname,
            'password': dpass,
            'email': demail
        };

        axios.post('http://127.0.0.1:8000/signin/docregister/', docdetails)
            .then((resp) => {
                if (resp.status === 201) {
                    const storeddocdata = JSON.parse(localStorage.getItem('docdata')) || {};

                let docdata = {
                    [dname]: dname
                };
                const updatedocdata = { ...storeddocdata, ...docdata };
                localStorage.setItem('docdata', JSON.stringify(updatedocdata));
                console.log(docdata)
                setShowLogindoc();
                }
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    if (error.response.data.error === 'A user with that username already exists') {
                        seterror('already exists');
                    } else {
                        seterror(error.response.data.error || 'An error occurred. Please try again.');
                    }
                } else {
                    seterror('An error occurred. Please try again.');
                }
            });
    };

    return (
        <div className="doclogcontainer">
            <h2>Register Form</h2><br />
            <form onSubmit={docregister}>
                <label ><b>Username</b></label>
                <input type="text" name="username" onChange={(d) => setdname(d.target.value)} placeholder="Enter your username" id="docloginp33" />
                <label ><b>Email</b></label>
                <input type="text" name="email" onChange={handledocemail} placeholder="Enter your email" id="docloginp33" />
                <label ><b>Password</b></label>
                <input type="password" name="password" onChange={(d) => setdpass(d.target.value)} placeholder="Password" id="docloginp33" />
                <label ><b>Confirm Password</b></label>
                <input type="password" name="confirmPassword" onChange={(d) => setConfirmPass(d.target.value)} placeholder="Confirm Password" id="docloginp33" />
                <button id="btndoclogtt">Register</button>
            </form>
            {error && error !== 'already exists' && <p className="error">{error}</p>}
            {error === 'already exists' && (
                <a onClick={setShowLogindoc} id='rega'>
                    <p style={{ color: 'red' }}>! Already have an account</p>
                </a>
            )}
        </div>
    );

}

export default Doctorregister;
