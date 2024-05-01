import React from 'react';
import './Treat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import {faLungs} from '@fortawesome/free-solid-svg-icons';


const Treat = () => {
  return (
    <div id='totaltrat54page'>
      <div id='insidetreat54'>
        <h1>Star Centers of Excellence</h1> <br/><br/>
        <p>Aster Prime’s world-class, Centres of Excellence (COE) are an amalgamation of experienced 
          doctors, state of the art technology, and the highest level of patient care and treatment. Our COE’s ensure that
           every aspect of your care is seamless and the team of experts work together to provide the care you need.</p>

      </div><br/><br/>



    <div className='treatcontainer12'>
        <div className='treatbox12'>
        <center className='treatcenter12'><FontAwesomeIcon icon={faHeartbeat} size='5x' color='orange' /></center><br/><br/>
        <center><label className='treatlabel12'>Cardiac Sciences</label></center>
           
        </div>

        <div className='treatbox12'>
        <center className='treatcenter12'><FontAwesomeIcon icon={faBrain} size='5x' color='orange' /></center><br/><br/>
        <center><label className='treatlabel12'>Neuro Sciences</label></center>
           
        </div>

        <div className='treatbox12'>
        <center className='treatcenter12'><FontAwesomeIcon icon={faLungs}  size='5x' color='orange'/></center><br/><br/>
        <center><label className='treatlabel12'>Aesthetic and Plastic Surgery</label></center>  
            
        </div>

        <div className='treatbox12'>
            
        <center className='treatcenter12'><FontAwesomeIcon icon={faAmbulance} size='5x' color='orange' />
        </center><br/><br/>
        <center><label className='treatlabel12'>24/7 <br/> Emergency Care</label></center>
            
        </div>
      
    </div>
    </div>
  )
}

export default Treat
