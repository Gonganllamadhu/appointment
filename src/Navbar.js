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
                {loggedin && <a>Doctors</a>}
                <a href="" id="navbara">About</a>
                {loggedin ? <a href="/profile" id="navbara">
                <div class="dropdown">
                        <a><FontAwesomeIcon icon={faUser} /> Profile</a>
                        <div class="dropdown-content">
                            <button >{loggedin && <a >Appointments</a>}</button>
                            <button>login</button>
                            <button >{loggedin && <a onClick={(handleLogout)}>Logout</a>}</button>
                        </div>
                </div></a> : <a href="/login" id="navbara">Login</a>}
                {/*{loggedin && <a onClick={(handleLogout)}>Logout</a>}*/}
                
            </div>
        </div>
    );
}
export default Navbar;