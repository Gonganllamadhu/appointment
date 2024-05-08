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

class Surgeries extends React.Component {
  render() {
    return (


      <div id='totalsurgerybox88'>
         <div id='surgeriestotal'>
            <div className='insidesurgery32'>
                <h1>Our Specialities</h1><br/>
                <p> We provide in-depth expertise in the spectrum of advance medical
                     and surgical interventions. Our specialties are integrated to provide a seamless experience.</p>
            </div><br/>
   
        </div>
      <div>

      </div>
      <div id='flexsurjjhh'>
      <div className='fexboxsurgery111'>
      <GiBrain style={{ fontSize: "2em" }} id='iconspec776spe' /><br/>
        
        <h2>Neurology</h2><br></br>
        <p>
        Neurology is a branch of medicine concerned with the
         study and treatment of disorders related to the nervous system.

        
        </p>
    
   
     </div>

     <div className='fexboxsurgery111'>
     <BsLungs style={{ fontSize: "2em" }} id='iconspec776spe'/>

<h2>Pulmonology</h2><br></br>
<p>
Pulmonology a branch of medicine concerned with the anatomy, physiology, and pathology of the lungs.
</p>
    
   
     </div>

     <div className='fexboxsurgery111'>
     <GiKidneys style={{ fontSize: "2em" }} id='iconspec776spe'/>

<h2>Nephrology</h2><br/>
<p>
Nephrology is the field of medicine that focuses on diagnosing and treating diseases that affect the kidneys.
</p>

      

    
   
     </div>
           
      </div >
      
      


     
        
   
        </div>

       
  
     

     

    
      
    );
  }
}

export default Surgeries;

