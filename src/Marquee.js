
import Marquee from 'react-fast-marquee';
import './Marquee.css';
import pic1 from './pic1.png';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpeg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.png';
import pic7 from './pic7.jpg';

function Marque(){
    return(
        <div className='mainmarquee'>
            <div className='inmarquee'><h1>Our Technology Partner</h1></div>
        
            <div>
                <Marquee>
                    <div className='hpic1'>
                        <img src={pic1} height={200} width={250} />
                    </div>
                    <div className='hpic2'>
                        <img src={pic7} height={100} width={150}/>
                    </div>
                    <div className='hpic3'>
                        <img src={pic3} height={100} width={150}/>
                    </div>
                    <div className='hpic4'>
                        <img src={pic4} height={100} width={150} />
                    </div>
                    <div className='hpic5'>
                        <img  src={pic5} height={100} width={150}/>
                    </div>
                    <div className='hpic6'>
                        <img  src={pic6} height={100} width={150}/>
                    </div>

                </Marquee>
            </div>
        </div>
        
    )
}
export default Marque;