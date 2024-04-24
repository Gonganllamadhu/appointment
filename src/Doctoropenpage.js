import React from "react";
import './Doctoropenpage.css';
import pic from './doctor group pic.png'
import pic1 from './caduceus (1).png';

function Doctoropenpage(){
    return(
        <div>
        <div className="docopenpage">
            <img src={pic}  width={800} height={400}></img> <br/>
            <div className="aboutdocpage">
            <h1 className="docopenpage3333">About Star Hospital</h1> <br/> 
            <p>Star Hospitals is one of the topmost healthcare providers in India. Our hospitals are renowned for their medical
                 infrastructure and expertise as we have some of the finest
                 doctors in the country, supported by ultra-modern<br/> technologies, research-based 
                 care in a warm & comforting environment.
                  Our trusted doctors and a team of specialists work closely together to provide the best of healthcare.</p><br/><br/>
            
            <h1>Our Values</h1> <br/>
            <p>We, at Aster DM Healthcare, abide by a core set of values that guide our organisational behaviour and decision making, and that create the unique ethos that is imbibed in every Asterian.</p>
            </div><br/><br/>
            <img src={pic1} width={300} height={300} id="caducusid"></img>

            
        </div>
        
        </div>
    )
}

export default Doctoropenpage;