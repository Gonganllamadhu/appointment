import React from "react";
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import NoteIcon from '@mui/icons-material/Note';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';


function Features(){
   
    return(
        <div>
            <div id="alwaysherefor">
            <h1>Always here for you</h1>
            </div>
        <div className="feacontainer">
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-clock-rotate-left" />

            <div className="feabox"><center className="feaicon"><FontAwesomeIcon icon={faClockRotateLeft} size="3x" color="green"/> </center><br/><br/><center><label id="fealabel1">We are available <br/>around the clock!</label></center></div>
            <div className="feabox"><center className="feaicon"> <FontAwesomeIcon icon={faPhoneAlt} size="3x"  color="green"/>

            
                </center><br/><br/><center><label id="fealabel1">Dedicated support <br/>team to monitor</label></center></div>
            <div className="feabox"><center className="feaicon"><FontAwesomeIcon icon={faClipboardList} size="3x" color="green" />

                </center><br/><br/><center><label id="fealabel1">No waiting in queue <br/> for appointment</label></center>
            </div>
            <div className="feabox"><center className="feaicon">

            <FontAwesomeIcon icon={faAmbulance} size='3x' color='green' /></center>

                <br/><br/><center><label id="fealabel1">24/7<br/> Emergency<br/>Care</label></center>
            </div>

        </div>
        </div>
    )
};

export default Features;