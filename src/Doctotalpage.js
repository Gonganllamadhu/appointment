import './Doctortotalpage.css';
import React from "react";
import Doctoropenpage from "./Doctoropenpage";
import Doctorlogin from "./Doctorlogin";

function Doctotalpage(){
    return(
        <div>
        <div className="app-container">
            <div className="doc98767"><Doctoropenpage/></div>
            <div className="hjuh7654"><Doctorlogin/></div>

        </div>
        <div id='aboutandvalues11'>
        <h1 className="docopenpage3333">About Star Hospital</h1> <br/> 
            <p>Star Hospitals is one of the topmost healthcare providers in India.
                 Our hospitals are renowned for their medical
                 infrastructure and expertise as we have some of the finest
                 doctors in the <br/>country, supported by ultra-modern technologies, research-based 
                 care in a warm & comforting environment.
                  Our trusted doctors and a team of specialists work closely together to
                   provide<br/> the best of healthcare.</p><br/><br/>
            
        <h1>Our Values</h1> <br/>
            <p>We, at Aster DM Healthcare, abide by a core set of values that guide our organisational behaviour and decision making, and that create the unique ethos that is imbibed in every Asterian.</p>
            <br/><br/>
            
                 
            
        </div>
        </div>

    )
}

export default Doctotalpage;