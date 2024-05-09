import './Appointment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhoneFlip } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Padding } from '@mui/icons-material';
import axios from 'axios';



function AppointmentForm(){
    let [pname,setpname] = useState('')
    let [gname,setgname] = useState('')
    let [phone,setphone] = useState(0)
    let [email,setemail] = useState('')
    let [date,setdate] = useState('')
    let [select,setselect] = useState('')
    let [states,setstates] = useState(false)

let patientinfo=(d)=>{
    d.preventDefault();
    
    let patientdetails={
        'pname':pname,
        'pgname':gname,
        'pphone':phone,
        'pemail':email,
        'pdate':date,
        'pdoctor':select,
    };
    axios.post('http://127.0.0.1:8000/signin/info/',patientdetails).then((e)=>{
        console.log(e.status);
        if (e.status == 201){
            setstates(true)
            

        }    
    })
    .catch((e)=>{
        console.log(e.data)
    })

}


return (
    <>
        {states !== true &&
            <div className='total232appoint'>
                <div className='main2323page'>
                    <form onSubmit={patientinfo}>
                        <label className='label2323app'>Patient's Name</label><br/>
                        <input className='input2323app' onChange={(e) => setpname(e.target.value)}></input><br/><br/>
                        <label className='label2323app'>Guardian Name</label><br/>
                        <input className='input2323app' onChange={(e) => setgname(e.target.value)}></input><br/><br/>
                        <label className='label2323app'>Phone</label><br/>
                        <input className='input2323app' onChange={(e) => setphone(e.target.value)}></input><br/><br/>
                        <label className='label2323app'>Email </label><br/>
                        <input className='input2323app' onChange={(e) => setemail(e.target.value)}></input><br/><br/>
                        <label className='label2323app'>Preferred Date</label><br/>
                        <input className='input2323app' type='date' onChange={(e) => setdate(e.target.value)}></input><br/><br/>
                        <label className='label2323app'>Preferred Doctor</label><br/>
                        <select className='input2323app' onChange={(e) => setselect(e.target.value)}>
                            <option selected disabled>Select one option</option>
                            <option value={'Dr.Narayana'}>Dr.Narayana</option>
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
                    
                       
                    
                </div>
            </div>
        }

        {states &&
        <div id='appointmentsucces'>
        
        <br/>
        <img src='https://media.istockphoto.com/id/1296078405/vector/vector-isolated-round-completed-label.jpg?s=612x612&w=0&k=20&c=CNkTbrNNNikay9hTXc02OXFKF40XZJp_w2eomM4LxEU=' width={300} height={250}></img>
         <h1>Your appointment has been booked successfully</h1>
        </div>
        }
    </>
);
}


export default AppointmentForm;




