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
=======
import Features from './Features';
import Treatment from './Treatment';
import Appointment from './Appointment';

>>>>>>> 94e29999423f7baafe0ac07ea049318992f9edcc
import About from './About';
import Features from './Features';
import Treatment from './Treatment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
  <Navbar/>
  <Home/>
  <Speciality/>
  <Features/>
  <About />
  <Treat />
  <Info/>
=======
  <Appointment/>
>>>>>>> 94e29999423f7baafe0ac07ea049318992f9edcc
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
