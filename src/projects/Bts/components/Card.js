import logo1 from '../Images/bus1.png';
import mobilelogo from '../Images/mobile-logo.png';
import emaillogo from '../Images/email-logo.png';
import { Link } from 'react-router-dom';
function card(props) {
    
    return (
        <div className="card1">
            {props.status===0&&<div>Available</div>}
            <div>
                
                <img src='https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/BS%20VI%20Bus%20Single%20Axcel_Single%20Bus?wid=1024' />
                <h4>{props.name}</h4>
            </div>
            <div className="phem">
                <div className="numlogo">
                    <img src={mobilelogo} className="imglogo" />
                    <h3>{props.mobile}</h3>
                </div>
                <div className="email">
                    <img src={emaillogo} className="emaillogo"/>
                <h3>availble:{props.mail}</h3>
                <h3><Link to={`/bus/${props.mobile}`}><button>Order</button></Link></h3>
                </div>


                
            </div>


        </div>




    )
}
export default card;