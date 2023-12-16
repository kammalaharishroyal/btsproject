import { Link } from "react-router-dom";
import logo1 from '../Images/react-logo.png'
function HeaderNew(){
    return (
        <header >
    
       
    <nav className='nav'>
                <a href="https://youtube.com/" target="blank">
                    <img src={logo1} className="imgpage2"/>
                </a>
                <h2 className="bts">BTS</h2>
                <input placeholder="search here" className="searchbox"></input>
                <ul className="navitems">
                    <li><Link to='/bts'><button >BTS</button></Link></li>
                    <li><Link to={'/bus'}><button >Explore</button></Link></li>
                    <li><Link to={'orders'}><button >Orders</button></Link></li>
                    <li><Link to={'/account'}><button>Account</button></Link></li>
                    <li><Link to={'/login'}><button>Login</button></Link></li>
                    <li><Link to={'/about'}><button>About</button></Link></li>
                    <li><Link to={'/contact'}><button>ContactUs</button></Link></li>
                    <li><button>Logout</button></li>
                    <li><Link to="/register"><button>Register</button></Link></li>
                </ul>

            </nav>
     
    </header>
        
    )
}
export default HeaderNew;