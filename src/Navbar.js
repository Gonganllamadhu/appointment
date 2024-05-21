import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect , useState } from "react";
import { faHouse, faUser, faCalendarAlt, faUserMd, faInfo } from '@fortawesome/free-solid-svg-icons';


function Navbar({setAppointment,showdoctor,showappointments,loginasdoc,loginaspat}){
const [loggedin, setloggedin] = useState(false)
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            setloggedin(true)
        }
    })

    const handleShowAppointments=(event)=>{
        event.preventDefault();
        showappointments();
        console.log('hsgfjahdkaj')
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setloggedin(false)
        window.location.reload();
    }
    return(
        <div className="Navbar">
            <div className="left "><a href="/" id="navbara"><FontAwesomeIcon id="resphh88" icon={faHouse} size="4px"/></a></div>
            <div className="right">
                {loggedin && <a className="openres123"  id="resphh88" onClick={setAppointment} ><FontAwesomeIcon icon={faCalendarAlt}  /><label id="resnavmobile"> Book an appointment</label></a>}
                {loggedin && <a className="openres123" id="navbara" onClick={showdoctor} ><FontAwesomeIcon icon={faUserMd} /><label id="resnavmobile">Doctors</label> </a>}
                <a href="/" id="navbara" className="openres123"><FontAwesomeIcon icon={faInfo} /><label id="resnavmobile">About</label> </a>               
                {loggedin ? <a href="/profile" id="navbara">
                <div class="dropdownlogin">                   
                <label className="dropbtnlogin"><FontAwesomeIcon icon={faUser} /><label id="resnavmobile">Profile</label> </label>                   
                    <div class="dropdown-contentlogin">

                        
                        <a onClick={(handleShowAppointments)}>Appointments</a>
                        <a onClick={(handleLogout)}>Logout</a>

                    </div>
                    
                    </div></a> : <div class="dropdownlogin">                   
                        <label class="dropbtnlogin" id="resphh88">Login</label>                   
                        <div class="dropdown-contentlogin">
                        
                            <a onClick={loginaspat}>Login as Patient</a>
                            <a onClick={loginasdoc}>Login as Doctor</a>
                        
                        </div>
                    </div>}
                {/*{loggedin && <a onClick={(handleLogout)}>Logout</a>}*/}

            
            </div>
        </div>
    );
}
export default Navbar;