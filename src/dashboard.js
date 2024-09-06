import { useState,useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrHomeRounded } from "react-icons/gr";
import logo from "./images/Capture.png"
import { MdFolderOpen } from "react-icons/md";
import { MdDriveFolderUpload } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const Dashboard = () => { 
    return (  
       <div className="dashcontainer" style={{padding:"12px"}}>
            <img src={logo} alt="" id="logo" style={{ width: 'auto', height: '60px', borderRadius: '10px' }} />
            <br /><br /><br /><br /><br /><br />
            <h2 style={{fontWeight:'bold'}}>Ressources</h2>
            <br />

           <Link to="/home"> <div className="dashboardbutton"><GrHomeRounded style={{ width: 'auto', height: '30px', margin:'5px',color:"black" }}/> <span style={{fontWeight:'bold' , fontSize:'larger',color:"black"}}>Home</span></div></Link>
            <br />
            <Link to="/collections"><div className="dashboardbutton"><MdFolderOpen style={{ width: 'auto', height: '30px', margin:'5px',color:"black" }} /> <span style={{fontWeight:'bold' , fontSize:'larger',color:"black"}}>Collections</span></div></Link>
            <br />
            <Link to="/uploads"><div className="dashboardbutton"><MdDriveFolderUpload style={{ width: 'auto', height: '30px', margin:'5px',color:"black" }}/><span style={{fontWeight:'bold' , fontSize:'larger',color:"black"}}>Uploads</span></div></Link>
            <br />
            <Link to="/liked"><div className="dashboardbutton"><FaRegHeart style={{ width: 'auto', height: '30px', margin:'5px',color:"black" }}/><span style={{fontWeight:'bold' , fontSize:'larger',color:"black"}}>Likes</span></div></Link>
       </div>
       
    );
}
 
export default Dashboard;