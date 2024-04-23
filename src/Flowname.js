
import './Flowname.css';
import Marquee from "react-fast-marquee";
import image from './starhospital1.png'
function Flowname(){
    return(
        <Marquee>
            <div className="starpic">
            <img src={image} width={150} height={80} />
            </div>
        </Marquee>
    )
}
export default Flowname;