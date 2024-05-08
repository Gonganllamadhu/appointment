import img1 from './images/doctor 4.jpg';
import img2 from './pkdr10.jpeg';
import img3 from './pkdr11.jpg';
import img4 from './pkdr9.jpg';
import img5 from './pkdr5.jpeg';
import img6 from './pkdr8.jpeg';
import img7 from './pkdr9.jpg';
import React from 'react';
import './doctor.css'


function DoctorPage() {
  return (
    
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img1} alt="" height={2000}/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr. John Doe</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong> Cardiology</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 10 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MD</p> {/* Bold the label */}
        <p><strong>About:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget leo justo.
         Vivamus sodales eros id velit aliquam, eu luctus purus tempus.</p>
         <button  >Book an Appointment</button>
      </div>
    </div>
  );
}

function Doctor1() {
  return (
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img2} alt=""/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr.Kalyani</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong>Dentist</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 10 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MD</p> {/* Bold the label */}
        <p><strong>About:</strong> She is a
         health care professional who specializes in dentistry, the branch of
          medicine focused on the teeth, gums, and mouth.</p>
         <button  >Book an Appointment</button>
      </div>
    </div>
  );
}
function Doctor2() {
  return (
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img3} alt=""/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr. Savithri</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong>orthopedic</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 13 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MD</p> {/* Bold the label */}
        <p><strong>About:</strong>Specialization in surgical and nonsurgical approaches to treat musculoskeletal issues,
         such as sports injuries, joint pain, and back problems.</p>
         <button  >Book an Appointment</button>
      </div>
    </div>
  );
}
function Doctor3() {
  return (
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img4} alt=""/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr. Khasim</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong> Surgeon</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 11 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MD</p> {/* Bold the label */}
        <p><strong>About:</strong> Surgeons diagnose and treat injuries or illnesses in a patient,
        treat injuries, including a broken bone, diseases including cancer, tumors, and deformities including cleft palates.</p>
         <button  >Book an Appointment</button>
      </div>
    </div>
  );
}
function Doctor4() {
  return (
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img5} alt=""/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr. Narayana</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong> Cardiology</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 15 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MD</p> {/* Bold the label */}
        <p><strong>About:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget leo justo.
         Vivamus sodales eros id velit aliquam, eu luctus purus tempus.</p>
         <button  >Book an Appointment</button>
      </div>
    </div>
  );
}
function Doctor5() {
  return (
    <div className='doctor-container'>
      
      <div className='doctor'>
        <img src={img6} alt=""/>
      </div  >
      <div className='matter'>
        
      <h2><strong>Dr. Harathi</strong></h2> {/* Bold the doctor's name */}
        <p><strong>Specialization:</strong> Neurologist</p> {/* Bold the label */}
        <p><strong>Experience:</strong> 10 years</p> {/* Bold the label */}
        <p><strong>Education:</strong> MBBS, MD</p> {/* Bold the label */}
        <p><strong>About:</strong> A neurologist is a medical doctor who diagnoses, treats and manages
         disorders of the brain and nervous system (brain, spinal cord and nerves)</p>
         <button  className="appointment-button" >Book an Appointment</button>
      </div>
    </div>
  );
}


export { DoctorPage, Doctor1,Doctor2 ,Doctor3,Doctor4,Doctor5}; 