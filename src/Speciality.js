import './Speciality.css';
<<<<<<< HEAD



import React from 'react'


=======
>>>>>>> 4595c2311f72c30927db9150b829735c09e17ca0
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';


const Speciality = () => {
  return (
    <div className='specbox'>
        
        
        <div className='specbox1'><center className='specicons'><FontAwesomeIcon icon={faUserMd} size='2x' color='white' /></center><br/><br/><center><label id='specid'>50+ <br></br> Doctors</label></center>

        </div>
      
        <div className='specbox1'> <center className='specicons'><FontAwesomeIcon icon={faSyringe} size='2x' color='white' /></center><br/><br/><center><label id='specid'>30,000+ <br></br>Surgeries </label></center></div>
        <div className='specbox1'> <center className='specicons'><FontAwesomeIcon icon={faBed} size='2x' color='white' /></center><center><br/><br/><label id='specid'>400+ <br></br></label><label id='specid'>Beds</label></center></div>
        <div className='specbox1'> <center className='specicons'><FontAwesomeIcon icon={faUsers} size='2x' color='white' /></center><center><br/><br/><label id='specid'>10Lakhs+ <br></br> Happy Patients</label></center></div>
        
      
    </div>
    
  )
}

export default Speciality;
