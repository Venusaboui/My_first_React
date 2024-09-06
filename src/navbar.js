import { Link } from "react-router-dom"; 
import notif from './images/notif.png'
import language from './images/language.png'
import profile from './images/profile.png'



const  Navbar = () => {
    return ( 

        <nav className="navbar">
          
            <div className="links">
                <Link to="/notifications"><img src={notif} alt="" style={{width:"30px",}}/></Link>
                
                <Link to="/language" ><img src={language} alt="" style={{width:"30px",}}/></Link>

                <Link to="/profile" ><img src={profile} alt="" style={{width:"30px",}}/></Link>
            </div>
        </nav>
     );
}
 
export default  Navbar;