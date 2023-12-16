import '../btproject.css'
import mobilelogo from '../Images/mobile-logo.png';
import emaillogo from '../Images/email-logo.png';
import { Link } from 'react-router-dom';
function BusCompo(props) {
    
    return (
        <Link to={`${props.mobile}`}>
        <div className="card2">
            {props.status===0&&<div>Available</div>}
            <div className='card2img'>
                
                <img src='https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/BS%20VI%20Bus%20Single%20Axcel_Single%20Bus?wid=1024' />
                <h4>{props.name}</h4>
            </div>
            <div className="phem">
               <h2>RayalseemaExpress</h2>
               <h2>$1000/day</h2>
            

                
            </div>


        </div>
</Link>



    )
}
export default BusCompo;