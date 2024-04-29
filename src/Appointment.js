import './Appointment.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhoneFlip } from '@fortawesome/free-brands-svg-icons';


function Appointment(){
    return(
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
            <div>
                <center><h2 id='numflipkk'>040-2232223233</h2>
           </center><br/>
           <center><p>24 X 7 Appointment Helpline Number</p></center>
           
        </div>

        </div>


        </div>
    )
}    

export default Appointment;