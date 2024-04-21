import React from "react";
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import AccessTimeIcon from '@mui/icons-material/AccessTime';



import { FaPhone } from 'react-icons/fa';
import NoteIcon from '@mui/icons-material/Note';






function Features(){
   
    return(
        <div className="feacontainer">
            <div className="feabox"><center className="feaicon"><AccessTimeIcon  /></center><br/><br/><center><label>We are available <br/>around the clock!</label></center></div>
            <div className="feabox"><center className="feaicon"> {/* Use the Phone icon */}
            <FaPhone color="orange" size="2x"/>
            </center><br/><br/><center><label></label></center></div>
            <div className="feabox"><center className="feaicon"><NoteIcon color="orange" />
      {/* You can add text or other elements here */}</center><br/><br/><center><label></label></center></div>
            <div className="feabox"><center className="feaicon"><AccessTimeIcon/></center><br/><br/><center><label></label></center></div>

        </div>
    )
};

export default Features;