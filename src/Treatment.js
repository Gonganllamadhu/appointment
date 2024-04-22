
import './Treatment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTeeth } from '@fortawesome/free-solid-svg-icons';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { faBone } from '@fortawesome/free-solid-svg-icons';

function Treatment(){
    return(
        <div className='bigbox'>
            <div className='sbox'>
                <center className='sboxcenter'><FontAwesomeIcon icon={faTeeth}  size='5x' color='green'/></center><br/><br/>
                <center><label className='sboxlabel'>teeth replacement</label></center>
            </div>

            <div className='sbox'>
                <center className='sboxcenter'><FontAwesomeIcon icon={faGlasses}  size='5x' color='green'/></center><br/><br/>
                <center><label className='sboxlabel'>Glasses</label></center>
            </div>

            <div className='sbox'>
                <center className='sboxcenter'><FontAwesomeIcon icon={faStethoscope} size='5x' color='green'/></center><br/><br/>
                <center><label className='sboxlabel'>doctor available 24/7</label></center>
            </div>

            <div className='sbox'>
                <center className='sboxcenter'><FontAwesomeIcon icon={faBone} size='5x' color='green'/></center><br/><br/>
                <center><label className='sboxlabel'>bones joining</label></center>
            </div>
        </div>
    )
}
  
export default Treatment;