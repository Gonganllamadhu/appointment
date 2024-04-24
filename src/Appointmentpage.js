import React from "react";
import './Appointmentpage.css';


function Appointmentpage(){
    return(
        <div className="totalappointpage">
                 
            <div className="appointpagemaincontent">
                <div className="appointpagebox66"><label className="appointlabel66">Patient's Name</label><br/><input className="appontinputl66"></input></div>
                <div className="appointpagebox66"><label className="appointlabel66">Guardian Name</label><input className="appontinputl66"></input ></div>
                <div className="appointpagebox66"><label className="appointlabel66">Phone</label><input className="appontinputl66"></input></div>
                <div className="appointpagebox66"><label className="appointlabel66">Email</label><input className="appontinputl66"></input></div>
             
       

            </div>
                <div className="afterfelx">
                <div className="appointpagebox66"><label className="appointlabel66">Preferred Date</label><br/>
                <input type="date" id="khkhkhkj"></input></div> 
                    <label>Appointment for</label><br/>
                    <select className="appontinputl55">
                        <option>Select one option</option>
                        <option>Dr. </option>
                        <option></option>
                        <option></option>

                    </select> <br/>
                    <label>Health Issue / Message</label><br/>
                    <input  id="khkhkhkj"></input>
                  
                </div>
                <div className="phonenumdiv">
                    <label>jsshjnjjcdsjj</label>

                </div>

                

        </div>

    )
};

export default Appointmentpage;