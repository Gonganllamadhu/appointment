import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Docmyappoints.css';

const Docmyappoints = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    let docusername = JSON.parse(localStorage.getItem('docusername'));
    console.log(docusername);

    axios.post('http://127.0.0.1:8000/signin/docappo/', docusername)
      .then(response => {
        setAppointments(response.data);
        console.log(response.data); 
      })
      .catch(error => {
        console.error('There was an error fetching the appointments!', error);
      });
  }, []); 

  return (
    <div>
      <div>
        <img src='https://c1.wallpaperflare.com/path/602/232/972/woman-person-desktop-work-987a2dd792a1b3510dca202c5106441a.jpg' width={1250} height={700} alt='Background' />
      </div>
      <div id='todaydocappschedule'>
        <center><h1>Today Patients List</h1></center><br />
        <div id='patientlist76'>
          <table id='docdatapull'>
            <thead>
              <tr>
                <th>Patient's Name</th>
                <th>Guardian's Name</th>
                <th>Phone Number</th>
                <th>Date</th>
                <th>Doctor</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.pname}</td>
                    <td>{appointment.pgname}</td>
                    <td>{appointment.pphone}</td>
                    <td>{appointment.pdate}</td>
                    <td>{appointment.pdoctor}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td id='td1' colSpan="4">No appointments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Docmyappoints;
