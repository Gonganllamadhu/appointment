import './Appointment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhoneFlip } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import axios from 'axios';

function AppointmentForm() {
    let [pname, setpname] = useState('');
    let [gname, setgname] = useState('');
    let [phone, setphone] = useState('');
    let [email, setemail] = useState('');
    let [date, setdate] = useState('');
    let [select, setselect] = useState('');
    let [states, setstates] = useState(false);
    let [error, seterror] = useState('');

    const emailhandle = (event) => {
        setemail(event.target.value);
        validateemail(event.target.value);
    };
   
   

    const validateemail = (email) => {
        const regemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regemail.test(email)) {
            seterror('Enter a valid email address');
            return false;
        } else {
            seterror('');
            return true;
        }
    };

    const timehandle = (event) => {
        const inputDate = event.target.value;
        setdate(inputDate);

        const parsedate = new Date(inputDate);
        if (isNaN(parsedate.getTime())) {
            seterror('Invalid date');
            return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (parsedate < today) {
            seterror('The date cannot be in the past');
            return;
        }

        seterror('');
    };

    const patientinfo = (d) => {
        d.preventDefault();

        if (error) {
            return; // Prevent form submission if there is an error
        }

        let patientdetails = {
            'pname': pname,
            'pgname': gname,
            'pphone': phone,
            'pemail': email,
            'pdate': date,
            'pdoctor': select,
        };

        axios.post('http://127.0.0.1:8000/signin/info/', patientdetails).then((e) => {
            console.log(e.status);
            if (e.status === 201) {
                setstates(true);
            }
        }).catch((e) => {
            console.log(e.response.data);
        });
    };

    return (
        <>
            {!states &&
                <div className='total232appoint'>
                    <div className='main2323page'>
                        <form onSubmit={patientinfo}>
                            <label className='label2323app'>Patient's Name</label><br />
                            <input className='input2323app' onChange={(e) => setpname(e.target.value)} required></input><br /><br />
                            <label className='label2323app'>Guardian Name</label><br />
                            <input className='input2323app' onChange={(e) => setgname(e.target.value)} required></input><br /><br />
                            <label className='label2323app'>Phone</label><br />
                            <input className='input2323app' type='tel' pattern="[6-9]{1}[0-9]{9}" onChange={(e) => setphone(e.target.value)} required></input><br /><br />
                            <label className='label2323app'>Email </label><br />
                            <input className='input2323app' type='text' onChange={emailhandle} required></input><br /><br />
                            <label className='label2323app'>Preferred Date</label><br />
                            <input className='input2323app' type='date' onChange={timehandle} required></input><br /><br />
                            {error && <p id='error' className="error">{error}</p>}
                            <label className='label2323app'>Preferred Doctor</label><br />
                            <select className='input2323app' onChange={(e) => setselect(e.target.value)} required>
                                <option value="" disabled selected>Select one option</option>
                                <option value='Dr.Narayana'>Dr.Narayana</option>
                                <option value='Dr.Harathi'>Dr.Harathi</option>
                                <option value='Dr.Karthik'>Dr.Karthik</option>
                                <option value='Dr.Kalyani'>Dr.Kalyani</option>
                                <option value='Dr.Savithri'>Dr.Savithri</option>
                                <option value='Dr.Khasim'>Dr.Khasim</option>
                            </select> <br /><br />
                            <label className='label2323app'>Message/Health Issue</label><br />
                            <input className='input2323app'></input><br /><br />
                            <input className='input2323app' type='submit' value='Book Appointment' id='input32appo'></input><br /><br />
                        </form>
                        
                    </div>
                    <div id='phone2323appoint'>
<<<<<<< HEAD
                    <div id='phoneinside3232'>
                        <center><label id='tim99idls'>Timings</label></center><br/> 
                        <center>Monday - Friday</center>
                        <center><p>10am - 6pm</p></center><br/>
                        <center>Saturday - Sunday</center>
                        <center><p>9am - 7pm</p><br/></center>
                        <hr size='2px' color='white'/><br/>
                        <center>
                            Call us 24 X 7 <br/>
                            99999999
                        </center>


                    </div>

                        
=======
                        <div id='phoneinside3232'>
                            <center><label className='tim99idls'>Timings</label></center><br/> 
                            <center>Monday - Friday</center>
                            <center><p className='tim99idls' >10am - 6pm</p></center><br/>
                            <center>Saturday - Sunday</center>
                            <center><p className='tim99idls' >9am - 7pm</p><br/></center>
                            <hr size='2px' color='white'/><br/>
                            <center>
                                Call us 24 X 7 <br/>
                                99999999
                            </center>
                        </div>
>>>>>>> b4a7bfb9f0e994c8bf258dccfd70101387693a63
                    </div>
                </div>
            }

            {states &&
                <div id='appointmentsucces'>
                    <br />
                    <img src='https://media.istockphoto.com/id/1296078405/vector/vector-isolated-round-completed-label.jpg?s=612x612&w=0&k=20&c=CNkTbrNNNikay9hTXc02OXFKF40XZJp_w2eomM4LxEU=' width={300} height={250}></img>
                    <h1>Your appointment has been booked successfully</h1>
                </div>
            }
        </>
    );
}

export default AppointmentForm;
