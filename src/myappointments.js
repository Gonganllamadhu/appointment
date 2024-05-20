import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './myappointments.css'
import { Label } from '@mui/icons-material';

function MyAppointments() {
    const [appointments, setAppointments] = useState([]);
 
    useEffect(() => {
        
        let phone = JSON.parse(localStorage.getItem('mobilenumber'));
        console.log(phone)
        axios.post('http://127.0.0.1:8000/signin/appointmentinfo/',phone)
            .then(response => {
                setAppointments(response.data);
                console.log(appointments)
            })
            .catch(error => {
                console.error('Error fetching appointments:', error);
            });
    }, []);

    let delappo=(pname)=>{
        const phone = JSON.parse(localStorage.getItem('mobilenumber'));
        let data={
            phone : phone,
            pname : pname,
        }
        axios.post('http://127.0.0.1:8000/signin/delappo/',data)
            .then(response => {
                if (response.status === 200) {
                    setAppointments(appointments.filter(app => app.pname !== pname));
                    alert('Appointment deleted successfully');
                }
            })
            .catch(error => {
                console.error('Error deleting appointment:', error);
                alert('Error deleting appointment');
            });
    };


    let fitch = ()=>{
        console.log(appointments)
    }
    return (
        <div className="appointmentcontainer">
            <h2><center>Welcome to Star Hospitals...</center></h2><br /><br />
            <center><h2>Appointment</h2></center><br /><hr size='10' color='green' /><br />
            <p>{appointments.pname}</p>

            {appointments.length === 0 ? (
                <h1>No appointments found</h1>
            ) : (
                appointments.map(appointment => (
                    <div key={appointment.id} className="appointment-card">
                        <p>Hii..</p><br />
                        <p>You have scheduled an appointment with <strong>{appointment.pdoctor}</strong> on <strong>{appointment.pdate}</strong>.</p><br />
                        <div id='myapppatientkksskk'>
                            <label id='myappfont88'><b>Patient Name</b></label>:<label id='myappfont88'>{appointment.pname}</label><br />
                            <label id='myappfont88'><b>Date</b></label>:<label id='myappfont88'>{appointment.pdate}</label><br />
                            <label id='myappfont88'><b>Doctor Name</b></label>:<label id='myappfont88'>{appointment.pdoctor}</label><br />
                            <label id='myappfont88'><b>Email</b></label>:<label id='myappfont88'>{appointment.pemail}</label>
                        </div>
                        <h4 id='h4'>Best Wishes from Star Hospitals</h4>
                        <p>Thank you for choosing Star Hospitals for your healthcare needs. We wish you good health and a speedy recovery.</p>
                        <p>If you have any questions or concerns, please don't hesitate to contact us.</p><br /><br />
                        <button id='del' onClick={() => delappo(appointment.pname)}>Delete Appointment</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default MyAppointments;
