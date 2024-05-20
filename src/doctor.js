import img1 from './images/doctor 4.jpg';
import img2 from './pkdr10.jpeg';
import img3 from './pkdr11.jpg';
import img4 from './pkdr9.jpg';
import img5 from './pkdr5.jpeg';
import img6 from './pkdr8.jpeg';
import img7 from './pkdr9.jpg';
import khpic from './pkdr12.png';
import React from 'react';
import './doctor.css'


function DoctorPage({setAppointment}) {
  return (
    
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img1} alt="" height={2000}/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr. John Doe</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong> Cardiology</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 10 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MS</p> {/* Bold the label */}
        <p><strong>About:</strong> A cardiologist is a physician who's an expert in the care of your heart and blood vessels. They can treat or help you prevent a number of cardiovascular problems</p>
         <button onClick={setAppointment}  >Book an Appointment</button>
      </div>
    </div>
  );
}

  function Doctor1({setAppointment}) {
  return (
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img2} alt=""/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr.Harathi</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong>Neurology</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 10 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MD</p> {/* Bold the label */}
        <p><strong>About:</strong> Neurology is the branch of medicine concerned with the study and 
        treatment of disorders of the nervous system.
         </p>
         <button onClick={setAppointment} >Book an Appointment</button>
      </div>
    </div>
  );
}
function Doctor2({setAppointment}) {
  return (
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img3} alt=""/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr. Narayana</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong>orthopedic</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 26 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MD</p> {/* Bold the label */}
        <p><strong>About:</strong>Specialization in surgical and nonsurgical approaches to treat musculoskeletal issues,
         such as sports injuries, joint pain, and back problems.</p>
         <button onClick={setAppointment} >Book an Appointment</button>
      </div>
    </div>
  );
}
function Doctor3({setAppointment}) {
  return (
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img4} alt=""/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr. Savithri</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong> Surgeon</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 11 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MD</p> {/* Bold the label */}
        <p><strong>About:</strong> Surgeons diagnose and treat injuries or illnesses in a patient,
        treat injuries, including a broken bone, diseases including cancer, tumors, and deformities including cleft palates.</p>
         <button onClick={setAppointment} >Book an Appointment</button>
      </div>
    </div>
  );
}
function Doctor4({setAppointment}) {
  return (
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img5} alt=""/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr. Karthik</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong> Gynecologist</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 5 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MS,DNB</p> {/* Bold the label */}
        <p><strong>About:</strong> A gynecologist is a physician who specializes in diagnosing and treating diseases of the female reproductive system. 
        Your reproductive system is responsible for pregnancy and menstruation.</p>
         <button onClick={setAppointment} >Book an Appointment</button>
      </div>
    </div>
  );
}
function Doctor5({setAppointment}) {
  return (
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img6} alt=""/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr. Kalyani</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong> Neurologist</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 10 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MD</p> {/* Bold the label */}
        <p><strong>About:</strong> A neurologist is a medical doctor who diagnoses, treats and manages
         disorders of the brain and nervous system (brain, spinal cord and nerves)</p>
         <button onClick={setAppointment} className="appointment-button" >Book an Appointment</button>
      </div>
    </div>
  );
}
function Doctor6({setAppointment}) {
  return (
    <div className='doctor-container'>
      
      <div className='doctorkh'>
        <img src={khpic} alt=""/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr. Khasim</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong> Surgeon</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 10 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MD</p> {/* Bold the label */}
        <p><strong>About:</strong> Surgeons diagnose and treat injuries or illnesses in a patient,
        treat injuries, including a broken bone, diseases including cancer, tumors, and deformities including cleft palates.</p>
         <button onClick={setAppointment} className="appointment-button" >Book an Appointment</button>
      </div>
    </div>
  );
}


export { DoctorPage, Doctor1,Doctor2 ,Doctor3,Doctor4,Doctor5,Doctor6}; 