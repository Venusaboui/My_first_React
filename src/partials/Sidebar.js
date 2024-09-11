import { FaRegHeart } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { MdDriveFolderUpload, MdFolderOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../images/Capture.png";

const Sidebar = () => { 
    return (  
       <div className="dashcontainer" style={{padding:"12px"}}>
            <img src={logo} alt="" id="logo" style={{ width: '100%',maxWidth:'100%', height: 'auto', borderRadius: '10px' }} />
            <br /><br /><br /><br /><br /><br />
            <h2 style={{fontWeight:'bold'}}>Ressources</h2>
            <br />

           <Link to="/home" className='dashlink'> <div className="dashboardbutton"><GrHomeRounded style={{ width: 'auto', height: '30px', margin:'5px',color:"black" }}/> <span style={{fontWeight:'bold' , fontSize:'larger',color:"black"}}>Home</span></div></Link>
            <br />
            <Link to="/collections" className='dashlink'><div className="dashboardbutton"><MdFolderOpen style={{ width: 'auto', height: '30px', margin:'5px',color:"black" }} /> <span style={{fontWeight:'bold' , fontSize:'larger',color:"black"}}>Collections</span></div></Link>
            <br />
            <Link to="/uploads" className='dashlink'><div className="dashboardbutton"><MdDriveFolderUpload style={{ width: 'auto', height: '30px', margin:'5px',color:"black" }}/><span style={{fontWeight:'bold' , fontSize:'larger',color:"black"}}>Uploads</span></div></Link>
            <br />
            <Link to="/liked" className='dashlink'><div className="dashboardbutton"><FaRegHeart style={{ width: 'auto', height: '30px', margin:'5px',color:"black" }}/><span style={{fontWeight:'bold' , fontSize:'larger',color:"black"}}>Liked</span></div></Link>
       </div>
       
    );
}
 
export default Sidebar;