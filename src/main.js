import React from "react";
import { useState } from "react";
import Home from "./Home";
import AppointmentForm from "./Appointment";
import MyAppointments from "./myappointments";
import Speciality from "./Speciality";
import Marque from "./Marquee";
import About from "./About";
import Navbar from "./Navbar";
import CoreValues from "./Para1";
import Features from "./Features";
import Surgeries from "./Surgeries";
import Surgeries1 from "./Surgeries1";
import Info from "./Info";
import Copyright from "./Copyright";
import { DoctorPage, Doctor1,Doctor2,Doctor3,Doctor4,Doctor5,Doctor6 ,VideoPlayer} from './doctor'; 


function Rendercomponents(){
    let [main,setmain] = useState(true)
    let [showdocs,setshowdocs] =useState(false)
    let [showmyappo,setshowmyappo] = useState(false)
    let [showappointment,setshowappointment] = useState(false)

    const setappointment=()=>{
        setmain(false)
        setshowappointment(true)
        console.log('function called')
    }
    const setdoctor=()=>{
        setmain(false)
        setshowappointment(false)
        setshowdocs(true)
        console.log('doctors called')
    }
    const setmyAppointment=()=>{
        setmain(false)
        setshowmyappo(true)
        console.log('appointments called')

    }
    return (
        <div>
            <Navbar setAppointment={setappointment} showdoctor={setdoctor} showappointments={setmyAppointment} />
            {main ? (
                <>
                    <Home />
                    <About />
                    <Speciality />
                    <Marque/>
                    <Features/>
                    <Surgeries/>
                    <Surgeries1/>

                </>
            ) : (
                <>
                    {showappointment && <AppointmentForm />}
                    {showmyappo && <MyAppointments /> }
                    {showdocs && (
                    <>
                        <DoctorPage />
                        <Doctor1 />
                        <Doctor2 />
                        <Doctor3 />
                        <Doctor4 />
                        <Doctor5 />
                    </>
                    )}
                </>
            )}
            
        </div>
    );
}

export default Rendercomponents;