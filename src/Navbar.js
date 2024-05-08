import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect , useState } from "react";
import { faHouse, faUser, faCalendarAlt, faUserMd, faInfo } from '@fortawesome/free-solid-svg-icons';
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

                {loggedin && <a href="#"><abbr title="Book an Appointment"><FontAwesomeIcon icon={faCalendarAlt} /></abbr> <label id="navbar54dynamic">Book an appointment</label></a>}
                {loggedin && <a href="#"><abbr title="Doctors"><FontAwesomeIcon icon={faUserMd} /></abbr> <label id="navbar54dynamic">Doctors</label></a>}
                <a href="#" id="navbara"><abbr title="About"><FontAwesomeIcon icon={faInfo} /></abbr> <label id="navbar54dynamic">About</label></a>                {loggedin ? <a href="/profile" id="navbara">
                <div class="dropdownlogin">                   
                <label className="dropbtnlogin"><FontAwesomeIcon icon={faUser} /> <label id="navbar54dynamic">Profile</label></label>                   
                    <div class="dropdown-contentlogin">
                      
                        <a href="#" >Appointments</a>
                        
                        <a href="#"onClick={(handleLogout)}>Logout</a>
                      
                    </div>
                    </div></a> : <div class="dropdownlogin">                   
                        <label class="dropbtnlogin">Login</label>                   
                        <div class="dropdown-contentlogin">
                        
                            <a href="#">Login as Patient</a>
                            <a href="#">Login as Doctor</a>
                        
                        </div>
                    </div>}
                {/*{loggedin && <a onClick={(handleLogout)}>Logout</a>}*/}


                
                
            </div>
        </div>
    );
}
export default Navbar;