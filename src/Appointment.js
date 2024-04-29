import './Appointment.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhoneFlip } from '@fortawesome/free-brands-svg-icons';

import React, { useState } from 'react';
import { Padding } from '@mui/icons-material';


function AppointmentForm() {
  

    return (
       
            <div className='total232appoint'>
         

         <div className='main2323page'>
             <label className='label2323app'>Patient's Name</label><br/>
             <input className='input2323app'></input><br/><br/>
             <label className='label2323app'>Guardian Name</label><br/>
             <input className='input2323app'></input><br/><br/>
             <label className='label2323app'>Phone</label><br/>
             <input className='input2323app'></input><br/><br/>
             <label className='label2323app'>Email </label><br/>
             <input className='input2323app'></input><br/><br/>
             <label className='label2323app'>Preferred Date</label><br/>
             <input className='input2323app'type='date'></input><br/><br/>
             <label className='label2323app'>Preferred Doctor</label><br/>
             <select  className='input2323app'>
                         <option>Select one option</option>
                         <option>Dr.Narayana </option>
                         <option>Dr.Harathi</option>
                         <option>Dr.Karthik</option>
                         <option>Dr.Kalyani</option>
                         <option>Dr.Savithri</option>
                         <option>Dr.Khasim</option>
 
                     </select> <br/><br/>
             <label className='label2323app'>Message/Health Issue</label><br/>
             <input className='input2323app'></input><br/><br/>
             <input className='input2323app' type='submit' value='Book Appointment' id='input32appo'></input><br/><br/>
             
 
         </div>
         <div id='phone2323appoint'>
             <div id='phoneinside3232'>
                <center><h3>APPOINTMENT TIMMINGS</h3></center><br/>
                <center><h4>Monday - Friday</h4></center>
                <center>8am - 1pm</center>
                <center>2pm - 6pm</center><br/>
                <center><h4>Saturday - Sunday</h4></center>
                <center>7am - 1pm</center>
                <center>2pm - 7pm</center><br/>
                <hr/><br/>
             

                 <center><h2 >040-2232223233</h2>
            </center>
            <center><p>24 X 7 Appointment Helpline Number</p></center>
            
         </div>
 
         </div>
 
 
         </div>
     
    
         
    );
}

export default AppointmentForm;




