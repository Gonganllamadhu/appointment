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
        localStorage.removeItem('mobilenumber')
        setloggedin(false)
        window.location.reload();
    }
    return(
        <div className="Navbar">
            <div className="left "><a href="/" id="navbara"><FontAwesomeIcon icon={faHouse} size="5px"/></a></div>
            <div className="right">
                {loggedin && <a  id="myappo" onClick={setAppointment} ><FontAwesomeIcon icon={faCalendarAlt}  /> Book an appointment</a>}
                {loggedin && <a id="mydoc" onClick={showdoctor} ><FontAwesomeIcon icon={faUserMd} /> Doctors</a>}
                <a href="/" id="navbara"><FontAwesomeIcon icon={faInfo} /> About</a>               
                {loggedin ? <a href="/profile" id="navbara">
                <div class="dropdownlogin">                   
                <label className="dropbtnlogin"><FontAwesomeIcon icon={faUser} /> Profile</label>                   
                    <div class="dropdown-contentlogin">

                        
                        <a onClick={(handleShowAppointments)}>Appointments</a>
                        <a onClick={(handleLogout)}>Logout</a>

                    </div>
                    
                    </div></a> : <div class="dropdownlogin">                   
                        <label class="dropbtnlogin">Login</label>                   
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