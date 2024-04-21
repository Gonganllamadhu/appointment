
import './Treatment.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUserMd, faSyringe } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';







function Treatment(){
    return(
        <div className="container">  
            <div className="box"><center><FontAwesomeIcon icon={faHeartbeat} size='5x' color='green'/><br/></center><br/><br/>
                        <div className='cardiac'><label>Cardiac Sciences</label></div> 
                        </div>
            
            <div className="box"><center><FontAwesomeIcon icon={faBrain} size='5x'color='green' /></center><br/><br/>
                <div className='brain'><p>Neuro Sciences</p></div>
                </div>
            
            <div className="box">
            <FontAwesomeIcon icon={faUserMd} size='5x' color='green' /> {/* Doctor icon */}
            <FontAwesomeIcon icon={faSyringe}  size='5x' color='green'/> {/* Surgery icon */}
                <div className='surgery'><p>Aesthetic and Plastic Surgery</p></div>
                </div>
            
            
            <div className="box"><FontAwesomeIcon icon={faAmbulance} size='5x' color='green'/> 
                <div className='ambulance'><p>24/7 Emergency <br/> and Trauma Care</p></div>
            </div>
               

        </div>
    )
}
export default Treatment;