import React from 'react';
import "./Surgeries.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { FaClinicMedical } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { GiKneeCap } from "react-icons/gi";
import { GiKidneys } from "react-icons/gi";
import { BsLungs } from "react-icons/bs";

class Surgeries1 extends React.Component {
  render() {
    return (
      <div id='totalsurgerybox88'>
        <div>

        </div>
        <div id='flexsurjjhh'>
            <div className='fexboxsurgery111'> <FontAwesomeIcon icon={faSyringe} size='2x' /><br/>
          <h2>Anesthesiology</h2><br></br>
          <p>   
            Anaesthesia is a medical subspecialty that helps to reduce pain before, during, and after surgery. Intensive care medicine treats all kinds of diseases.
          
          </p></div>
            <div className='fexboxsurgery111'><FontAwesomeIcon icon={faHeartPulse} size='2x'/>
          
         
          <h2>Cardiology</h2><br></br>
          <p>
          Cardiology is a branch of science dealing with the disorders of the heart as well as parts of the circulatory system.
          </p></div>
                    
            <div className='fexboxsurgery111'><GiKneeCap style={{ fontSize: "2em" }}/>
    
    <h2>Orthopaedics</h2><br></br>
    <p>
    Orthopaedics is a medical speciality focusing on the diagnosis, treatment, and management of
     patients with disorders that affect the skeletal system.
   
    </p></div>
           
</div>


        </div>

     
      
    );
  }
}

export default Surgeries1;

