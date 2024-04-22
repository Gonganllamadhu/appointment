import React from 'react';
import Logorreg from './logorreg';
import './Home.css';
import Starlogo from './Starlogo.png'

function Home() {
  return (
    <div className='home123'>
      <div id='logorreg'>
        <Logorreg />
      </div>
      <div className='content12'>
        <div className="logo-and-text">
            <img src={Starlogo} alt="Star Logo" height={100} width={100} />
            <h1>Star Hospitals</h1>
          </div>
        <p id='p1'>Center of excellence</p><br></br>
        <p id='p2'>Welcome to Star Hospitals, where compassionate care meets state-of-the-art technology. Our mission is to provide exceptional healthcare services to our community with integrity, compassion, and excellence.</p><br/>
        <h2 id='h1'>Medical Team</h2><br/>
        <p id='p3'>Our team of highly skilled doctors, nurses, and support staff are dedicated to providing personalized care to every patient. With years of experience and advanced training in their respective fields, our healthcare professionals are committed to excellence.</p><br/>
        <h2 id='h2'>Patient-Centered Care</h2><br/>
        <p id='p4' >At Star Hospitals, we prioritize our patients' well-being and safety. Our dedicated staff works tirelessly to ensure that every patient receives compassionate care in a safe and comfortable environment.</p><br/>
      </div>
    </div>
  );
}

export default Home;
