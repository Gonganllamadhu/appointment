import video from '../src/logo1.mp4';
import React, { useRef }  from 'react';
import './video.css';

function VideoPlayer() {
    const videoRef = useRef(null);
  
    const playPause = () => {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };
    return (
      <div id='logo1'>
       <video src={video} autoPlay loop muted controls={false} onClick={playPause} height={350}width={300}/>
      </div>
    );
  }
  
  export {VideoPlayer};