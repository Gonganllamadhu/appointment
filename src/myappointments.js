import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './myappointments.css'

function MyAppointments() {
    const [appointments, setAppointments] = useState([]);
 
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/signin/appointmentinfo/')
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                console.error('Error fetching appointments:', error);
            });
    }, []);


    let fitch = ()=>{
        console.log(appointments)
    }
    return (
        <div className="appointment-container">
            <h2><center>Welcome to Star Hospitals... </center></h2>
                {appointments.map(appointment => (
                    <div key={appointment.id} className="appointment-card">
                        <p>We are delighted to serve you. Here your appointments:</p>
                        <p>You have scheduled an appointment with <strong>{appointment.pdoctor}</strong> on<strong> {appointment.pdate}</strong> .</p><br/>
                        <table>
        <thead>
            <tr>
                <th>Patient Name</th>
                <th>Date</th>
                <th>Doctor Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{appointment.pname}</td>
                <td>{appointment.pdate}</td>
                <td>{appointment.pdoctor}</td>
                <td>{appointment.pemail}</td>
            </tr>
            
        </tbody>
    </table>
                        
                        {/* Add more appointment details as needed */}

                        <h4>Best Wishes from Star Hospitals</h4>
            <p>Thank you for choosing Star Hospitals for your healthcare needs. We wish you good health and a speedy recovery.</p>
            <p>If you have any questions or concerns, please don't hesitate to contact us..</p><br/><br/>
                    </div>
                ))}
            </div>
    );
}

export default MyAppointments;
