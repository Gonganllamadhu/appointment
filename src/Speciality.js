import './Speciality.css';
import pic from './doctorpic.jpeg'

import React from 'react'

const Speciality = () => {
  return (
    <div className='specbox'>
        
        
        <div className='specbox1'><img src={pic} width={100} height={100}></img> <label id='specid'>50+ <br></br> Doctors</label>

        </div>
        <div className='specbox1'><label id='specid'>30,000+ <br></br> Surgeries</label></div>
        <div className='specbox1'><label id='specid'>400+ <br></br> Beds</label></div>
        <div className='specbox1'><label id='specid'>10Lakhs+ <br></br> Happy Patients</label></div>
        
      
    </div>
    
  )
}

export default Speciality;
