import React from 'react';
import './Docmyappoints.css'

const Docmyappoints = () => {
  return (
    <div>
        <div>
        <img src='https://c1.wallpaperflare.com/path/602/232/972/woman-person-desktop-work-987a2dd792a1b3510dca202c5106441a.jpg' width={1250} height={700}></img>
        </div>
        <div id='todaydocappschedule'>
            <center><h1>Today Patients list</h1></center><br/>
            <div id='patientlist76'>
               <table id='docdatapull'>
                
                <th>Patients name</th>
                <th>Guardian name</th>
                <th>Phone number</th>
                <th>Message</th>
                
               </table>

            </div>

        </div>
      
    </div>
  )
}

export default Docmyappoints
