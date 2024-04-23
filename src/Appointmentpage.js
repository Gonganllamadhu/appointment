import React from "react";
import './Appointmentpage.css';


function Appointmentpage(){
    return(
        <div className="totalappointpage">
                 
            <div className="appointpagemaincontent">
                <div className="appointpagebox66"><label className="appointlabel66">Patient's Name</label><br/><input className="appontinputl66"></input></div>
                <div className="appointpagebox66"><label className="appointlabel66">Guardian Name</label><input className="appontinputl66"></input ></div>
                <div className="appointpagebox66"><label className="appointlabel66">phone</label><input className="appontinputl66"></input></div>
                <div className="appointpagebox66"><label className="appointlabel66">Email</label><input className="appontinputl66"></input></div>
                <div className="appointpagebox66"><label className="appointlabel66">Preferred Date</label><input className="appontinputl66" type="date"></input></div>
                <div className="appointpagebox66"><label className="appointlabel66">Preferred Time</label><input className="appontinputl66" type="time"></input></div>

            </div>
                <div className="afterfelx">
                    <label>Appointment for</label><br/>
                    <select className="appontinputl55">
                        <option>Select one option</option>
                        <option>Dr. </option>
                        <option></option>
                        <option></option>

                    </select> <br/>
                    <label>Health Issue / Message</label><br/>
                    <input className="appontinputl55"></input>
                  
                </div>
                <div className="phonenumdiv">
                    <label>jsshjnjjcdsjj</label>

                </div>

                

        </div>

    )
};

export default Appointmentpage;