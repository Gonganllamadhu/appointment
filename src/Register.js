import './Register.css';

function Register({setShowLogin}){

    return(
        <div className="box123">
            <label>Username</label><br/>
            <input type='text' placeholder='Enter your Username'></input> <br/>
            <label>Email address</label><br/>
            <input type='text' placeholder='Enter your Email address'></input> <br/>
            <lable>Password</lable><br/>
            <input type='password' placeholder='Enter your password'></input> <br/>
            <lable>Confirm Password</lable><br/>
            <input type='password'></input> <br/><br/>
            <button>Submit</button>
            <a onClick={setShowLogin}><p>alreday have an account ?</p></a>

        </div>
    );
};

export default Register;