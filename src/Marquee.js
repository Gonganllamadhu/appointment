
import Marquee from 'react-fast-marquee';
import './Marquee.css';
import pic1 from './pkdr11.jpg';
import pic3 from './pkdr5.jpeg';
import pic4 from './pkdr8.jpeg';
import pic5 from './pkdr9.jpg';
import pic6 from './pkdr10.jpeg';
import pic7 from './pkdr12.png';

function Marque(){
    return(
        <div className='mainmarquee'>
            <div className='inmarquee'><h1>Our Doctors</h1><br/></div>
        
            <div>
                <Marquee>
                    <div className='hpic1' id='commonpicid'>
                        <img src={pic1} height={190} width={160} />
                        <div><h1>Dr.Narayana</h1><h4>Cardiologist</h4></div>
                    </div>
                    <div className='hpic2' id='commonpicid'>
                        <img src={pic6} height={190} width={160}/>
                        <div><h1>Dr.Harathi</h1><h4>Neurologist</h4></div>
                    </div>
                    <div className='hpic3' id='commonpicid'>
                       <center><img src={pic3} height={190} width={160}/></center> 
                        <div><h1>Dr.Karthik</h1><h4>Gynecologist</h4></div>
                    </div>
                    <div className='hpic4' id='commonpicid'>
                        <img src={pic4} height={190} width={160} />
                        <div><h1>Dr.Kalyani</h1><h4>Dentist</h4></div>
                        
                    </div>
                    <div className='hpic5' id='commonpicid'>
                        <img  src={pic5} height={190} width={160}/>
                        <div><h1>Dr.Savithri </h1><h4>Orthopedist</h4></div>

                    </div>
                    <div className='hpic6' id='commonpicid'>
                        <img  src={pic7} height={190} width={160}/>
                        <div><h1>Dr.Khasim</h1><h4>Surgeon</h4></div>
                    </div>

                </Marquee>
            </div>
        </div>
        
    )
}
export default Marque;