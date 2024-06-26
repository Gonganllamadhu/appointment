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
import { DoctorPage, Doctor1,Doctor2,Doctor3,Doctor4,Doctor5,Doctor6,VideoPlayer} from './doctor'; 
import Totalimage from "./Totalimage";
import Treat from "./Treat";
import Medicalteam from "./Medicalteam";
import Doctoropenpage from "./Doctoropenpage";
import Docmyappoints from "./Docmyappoints";


function Rendercomponents(){
    let [main,setmain] = useState(true)
    let [showdocs,setshowdocs] =useState(false)
    let [showmyappo,setshowmyappo] = useState(false)
    let [showappointment,setshowappointment] = useState(false)
    let [logdoctor,setlogdoctor] = useState(false)
    let [logpatient,setlogpatient] = useState(false)
    let [showdocappo,setshowdocappo] = useState(false)

    const setappointment=()=>{
        setmain(false)
        setshowdocs(false)
        setshowappointment(true)
        setshowmyappo(false)
        console.log('function called')
    }
    const setdoctor=()=>{
        setmain(false)
        setshowappointment(false)
        setshowmyappo(false)
        setshowdocs(true)
    }
    const setmyAppointment=()=>{
        setmain(false)
        setshowappointment(false)
        setshowdocs(false)
        setshowmyappo(true)
        console.log('appointments called')

    }

    const loginasdoctor=()=>{
        setmain(false)
        setlogdoctor(true)
        setlogpatient(false)
        setshowdocappo(false)
        console.log('Doctor is logged')
    }
    const loginaspatient=()=>{
        setmain(false)
        setlogdoctor(false)
        setlogpatient(true)
        setshowdocappo(false)
    }

    const showdocmyappo=()=>{
        console.log('doctcalho')
        setmain(false)
        setshowdocappo(true)
        setlogdoctor(false)
    }

    return (
        <div>
            <Navbar setAppointment={setappointment} showdoctor={setdoctor} showappointments={setmyAppointment} loginasdoc={loginasdoctor} loginaspat={loginaspatient}/>
            {main ?
             (
                <>
                   <Totalimage/>
                    <About />
                    <CoreValues/>
                    <Speciality />
                    <Medicalteam/>
                    <Marque/>
                    <Features/>
                    <Surgeries/>
                    <Surgeries1/>

                </>
            ) : (
                <>
                    {showappointment && <AppointmentForm />}
                    {showmyappo && <MyAppointments /> }
                    {logdoctor && <Doctoropenpage setshowdocsappo={showdocmyappo}/>}
                    {showdocappo && <Docmyappoints/> }
                    {logpatient && <Home/>}
                    {showdocs && (
                    <>
                        <DoctorPage setAppointment={setappointment} />
                        <Doctor1 setAppointment={setappointment} />
                        <Doctor2 setAppointment={setappointment} />
                        <Doctor3 setAppointment={setappointment} />
                        <Doctor4 setAppointment={setappointment} />
                        <Doctor5 setAppointment={setappointment} />
                        <Doctor6 setAppointment={setappointment} />
                    </>
                   
                    )}
                </>
            )}
            
        </div>
    );
}

export default Rendercomponents;