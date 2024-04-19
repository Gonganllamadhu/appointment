import './Register.css';

function Register({setShowLogin}){

    return(
        <div className="box123">
            <div className='content123'>
                <label>Username</label><br/>
                <input type='text' placeholder='Enter Username'></input> <br/>
                <label>Email address</label><br/>
                <input type='text' placeholder='Enter Email address'></input> <br/>
                <lable>Password</lable><br/>
                <input type='password' placeholder='Enter password'></input> <br/>
                <lable>Confirm Password</lable><br/>
                <input type='password' placeholder='Confirm password'></input> <br/><br/>
                <button>Submit</button>
                <a onClick={setShowLogin} id='rega'><p>alreday have an account ?</p></a>
            </div>
        </div>
    );
};

export default Register;