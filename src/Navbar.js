import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    return(
        <div className="Navbar">
            <div className="left "><a href="/" id="navbara"><FontAwesomeIcon icon={faHouse} size="5px"/></a></div>
            <div className="right">
                <a href="" id="navbara">About</a>
                <a href="" id="navbara">Profile</a>
            </div>
        </div>
    );
}
export default Navbar;