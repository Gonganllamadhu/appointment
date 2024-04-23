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
import Para1 from './Para1';

import Speciality from './Speciality';
import Treat from './Treat';

import Appointment from './Appointment'
import About from './About';
import Features from './Features';
import Treatment from './Treatment';
import Copyright from './Copyright';
import Marque from './Marquee';
import Flowname from './Flowname';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
  <Navbar/>
  <Flowname />
  <Home/>
  <Speciality/>
  <Features />
  <About />

  <Treat />
  <Marque />
  <Para1/>
  
  <Info/>
  <Copyright />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
