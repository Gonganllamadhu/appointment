
import './Blackbox.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';

function Blackbox(){
    return(
        <div className="pblackbox">
            <center id='ppic'><FontAwesomeIcon icon={faSquarePhone} size='2x'/></center><br/>
            <label id='pnbr'>(040)20202000</label><br/><label id='phelp'>24 X 7 Appointment Helpline Number</label>
        </div>
    )
}
export default Blackbox;