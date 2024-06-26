import './Speciality.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';



const Speciality = () => {
  return (
    <div className='specbox'>
        
        
        <div className='specbox1'><center className='specicons'><FontAwesomeIcon icon={faUserMd} size='2x' color='white' /></center><br/><br/><center><label id='specid'>20+ <br></br> Doctors</label></center>

        </div>
      
        <div className='specbox1'> <center className='specicons'><FontAwesomeIcon icon={faSyringe} size='2x' color='white' /></center><br/><br/><center><label id='specid'>30,000+ <br></br>Surgeries </label></center></div>
        <div className='specbox1'> <center className='specicons'><FontAwesomeIcon icon={faBed} size='2x' color='white' /></center><center><br/><br/><label id='specid'>200+ <br></br></label><label id='specid'>Beds</label></center></div>
        <div className='specbox1'> <center className='specicons'><FontAwesomeIcon icon={faUsers} size='2x' color='white' /></center><center><br/><br/><label id='specid'>5Lakhs+ <br></br> Happy Patients</label></center></div>
        
      
    </div>
    
  )
}

export default Speciality;
