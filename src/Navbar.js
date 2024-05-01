import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect , useState } from "react";
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
const [loggedin, setloggedin] = useState(false)
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            setloggedin(true)
        }
    })

    const handleLogout = () => {
        localStorage.removeItem('token');
        setloggedin(false)
        window.location.reload();
    }
    return(
        <div className="Navbar">
            <div className="left "><a href="/" id="navbara"><FontAwesomeIcon icon={faHouse} size="5px"/></a></div>
            <div className="right">

                    <label>Doctors</label>

                    <div class="dropdownlogin">                   
                   <label class="dropbtnlogin">Login</label>                   
                    <div class="dropdown-contentlogin">
                      
                        <a href="#">Login as Patient</a>
                        <a href="#">Login as Doctor</a>
                      
                    </div>
                    </div>



                {loggedin && <a>Doctors</a>}
                <a href="" id="navbara">About</a>
                {loggedin ? <a href="/profile" id="navbara">
                <div class="dropdown">
                        <a><FontAwesomeIcon icon={faUser} /> Profile</a>
                        <div class="dropdown-content">
                            <button >{loggedin && <a >Appointments</a>}</button>
                            <button>{loggedin && <a>login</a>}</button>
                            <button>okkkk</button>
                            <button >{loggedin && <a onClick={(handleLogout)}>Logout</a>}</button>
                        </div>
                </div></a> : <a href="/login" id="navbara">Login</a>}
                {/*{loggedin && <a onClick={(handleLogout)}>Logout</a>}*/}


                <div class="dropdownlogin">                   
                   <label class="dropbtnlogin">Profile</label>                   
                    <div class="dropdown-contentlogin">
                      
                        <a href="#">Appointments</a>
                        <a href="#">Logout</a>
                      
                    </div>
                    </div>
                
            </div>
        </div>
    );
}
export default Navbar;