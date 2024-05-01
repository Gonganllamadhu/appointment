import './Appointment.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhoneFlip } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Padding } from '@mui/icons-material';


function AppointmentForm(){
    

    let [pname,setpname] = useState('')
    let [gname,setgname] = useState('')
    let [phone,setphone] = useState(0)
    let [email,setemail] = useState('')
    let [date,setdate] = useState('')
    let [select,setselect] = useState()

let patientinfo=(d)=>{
    d.preventDefault();
    console.log(pname)
    console.log(gname)
    console.log(phone)
    console.log(email)
    console.log(date)
    console.log(select)

    let patientdetails={
        'pname':pname,
        'pgname':gname
    };

}

    return(
        <div className='total232appoint'>
         
        <div className='main2323page'>
            <form onSubmit={patientinfo}>
                <label className='label2323app'>Patient's Name</label><br/>
                <input className='input2323app'onChange={(e)=>setpname(e.target.value)} ></input><br/><br/>
                <label className='label2323app'>Guardian Name</label><br/>
                <input className='input2323app'onChange={(e)=>setgname(e.target.value)} ></input><br/><br/>
                <label className='label2323app'>Phone</label><br/>
                <input className='input2323app'onChange={(e)=>setphone(e.target.value)} ></input><br/><br/>
                <label className='label2323app'>Email </label><br/>
                <input className='input2323app' onChange={(e)=>setemail(e.target.value)}></input><br/><br/>
                <label className='label2323app'>Preferred Date</label><br/>
                <input className='input2323app'type='date' onChange={(e)=>setdate(e.target.value)}></input><br/><br/>
                <label className='label2323app'>Preferred Doctor</label><br/>
                <select  className='input2323app' onChange={(e)=>setselect(e.target.value)} >
                            <option selected disabled>Select one option</option>
                            <option value={'Dr.Narayana'}>Dr.Narayana </option>
                            <option value={'Dr.Harati'}>Dr.Harathi</option>
                            <option value={'Dr.karthik'}>Dr.Karthik</option>
                            <option value={'Dr.Kalyani'}>Dr.Kalyani</option>
                            <option value={'Dr.Savarhri'}>Dr.Savithri</option>
                            <option value={'Dr.Khasim'}>Dr.Khasim</option>
                          
                        </select> <br/><br/>
                <label className='label2323app'>Message/Health Issue</label><br/>
                <input className='input2323app'></input><br/><br/>
                <input className='input2323app' type='submit' value='Book Appointment' id='input32appo'></input><br/><br/>
             </form> 
 
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




