import './Appointment.css';
import React from "react";

function Appointment(){
    
    return(
        <div className='appointmentpage'>
            <div className="appointbar">
                aaaaa

            </div>
            <br/> <br/>
                <center><label id='appointlabel'>Request An Appointment</label></center>
            <br/> <br/>
            <div className='appointform'>
                <div className='appointboxmain'>

                <div className='appointbox1'>
                    <label className='appointlabel12'>Patient's Name</label><br/>
                    <input type='text'></input> 
                </div>
                <div className='appointbox1'>
                    <label className='appointlabel12'>Guardian Name</label><br/>
                    <input type='text'></input>
                </div> <br/>

                <div className='appointbox1'>
                    <label className='appointlabel12'>Phone</label><br/>
                    <input type='Number'></input> 
                </div>
                <div className='appointbox1'>
                    <label className='appointlabel12'>Email</label><br/>
                    <input type='text'></input>
                </div>

                <div className='appointbox1'>
                    <label className='appointlabel12'>Preffered Date</label><br/>
                    <input type='date'></input> 
                </div>
                <div className='appointbox1'>
                    <label className='appointlabel12'>Preffered Time</label><br/>
                    <input type='Time'></input>
                </div>
    
                </div><br/>
           
                <label>Appointment For</label><br/>
                <select>
                    <option>Select one option</option>
                    <option>Dr. G.Madhu - Cardiologist</option>
                    <option>Dr. N.Pranai - Naturopath</option>
                    <option>Dr. G.Pavan - Neurologist</option>
                    <option>Dr. Khasim - Fertility Specialist</option>
                    
                </select>
                <br/><br/>
                <label>Health Issue / Message</label><br/>
                <input className='appinput765'></input> <br/><br/>
                <button>SEND</button>
            
            


            </div>

            <div className='phonenumberdiv'>0000000000000

            </div>

        </div>

    )
};

export default Appointment;
