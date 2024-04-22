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
import Speciality from './Speciality';
import Treat from './Treat';
<<<<<<< HEAD
import Features from './Features';
import Treatment from './Treatment';
import Copyright from './Copyright';
import Marquee from './Marquee';


=======
import Appointment from './Appointment'
>>>>>>> 4595c2311f72c30927db9150b829735c09e17ca0
import About from './About';
import Features from './Features';
import Treatment from './Treatment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar/>
  <Home/>
  <Speciality/>
  <Features />
  
  <About />
  
  <Treat />
<<<<<<< HEAD
  <Marquee />
  <Info/>
  <Treatment />
  <Copyright />

  
=======
  <Info/>
>>>>>>> 4595c2311f72c30927db9150b829735c09e17ca0
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
