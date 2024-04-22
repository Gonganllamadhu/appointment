import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import Info from './Info';
import Logorreg from './logorreg';
import Register from './Register';
<<<<<<< HEAD
import Para1 from './Para1';
=======
import Speciality from './Speciality';
import Treat from './Treat';

import Appointment from './Appointment'

import About from './About';
import Features from './Features';
import Treatment from './Treatment';
<<<<<<< HEAD
import Copyright from './Copyright';
import Marquee from './Marquee';
=======
>>>>>>> 4595c2311f72c30927db9150b829735c09e17ca0
>>>>>>> 6c80bae08f8ad3e0e63110f442a0aa06deb27558

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Navbar/>
    
    <Logorreg/>
    <Home/>
    <Info/>
    <Para1/>
    
=======
  <Navbar/>
  <Home/>
  <Speciality/>
  <Features />
  
  <About />
  
  <Treat />
  <Marquee />
  <Info/>
<<<<<<< HEAD

  <Copyright />

=======
>>>>>>> 4595c2311f72c30927db9150b829735c09e17ca0
>>>>>>> 6c80bae08f8ad3e0e63110f442a0aa06deb27558
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
