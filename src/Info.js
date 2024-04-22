import './Info.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { faBone } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import Starlogo from './Starlogo.png'
import { Height } from '@mui/icons-material';



function Info(){
    return(
        <div className="box">
            <div className='box0'>
                <div id='starlogo'>
                    <img src={Starlogo} alt="Star Logo" height={70} width={70} />
                    <h3 id='logoh3'>Star Hospitals</h3>
                </div>
                <div className="values">
                    <p><span className="dot">Expertise</span>
                    <span className="dot">Empathy</span>
                    <span className="dot">Excellence</span></p>
                </div>
            </div>
            <div className="box1">
                <h4>Specialities</h4><br/>
                <FontAwesomeIcon icon={faHeart} /> <span>Cardilogy</span><br/>
                <FontAwesomeIcon icon={faBaby} /> <span>Pediatrics</span><br/>
                <FontAwesomeIcon icon={faBone} /> <span>Orthopedics</span><br/>
                <FontAwesomeIcon icon={faBrain} /> <span>Nuerology</span><br/>
                <FontAwesomeIcon icon={faStethoscope} /> <span>Dermotolgy</span>
            </div>
            <div className="box2">
                <address>
                    <h3>Locations</h3><br/>
                    <p className='dot'>Hyderabad</p>
                    <p className='dot'>vijayawada</p>
                    <p className='dot'>chennai</p>
                    <p className='dot'>Bengaluru</p>
                </address>
               
            </div>
            <div className="box3">
                <h4>Social media</h4><br/>
                <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span><br/>
                <FontAwesomeIcon icon={faYoutube} /> <span>Youtube</span><br/>
                <FontAwesomeIcon icon={faFacebookF} /> <span>Facebook</span><br/>
                <FontAwesomeIcon icon={faTwitter} /> <span>Twitter</span><br/>
            </div>

        </div>

    )
}

export default Info;