import { useState,useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrHomeRounded } from "react-icons/gr";
import logo from "./images/Capture.png"
import { MdFolderOpen } from "react-icons/md";
import { MdDriveFolderUpload } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";


const Dashboard = () => { 
    return (  
       <div className="dashcontainer" style={{padding:"12px"}}>
            <img src={logo} alt="" id="logo" style={{ width: 'auto', height: '60px', borderRadius: '10px' }} />
            <br /><br /><br /><br /><br /><br />
            <h2 style={{fontWeight:'bold'}}>Ressources</h2>
            <br />
            <div className="home">
            <GrHomeRounded   style={{ width: 'auto', height: '30px', margin:'5px' }} /> <span style={{ fontWeight:'bold' , fontSize:'larger'}}>Home</span></div>
            <br />
            <div className="collections"><MdFolderOpen style={{ width: 'auto', height: '30px', margin:'5px'}} /> <span style={{ fontWeight:'bold' , fontSize:'larger'}}>Collections</span></div>
            <br />
            <div className="uploads"><MdDriveFolderUpload style={{ width: 'auto', height: '30px' , margin:'5px'}} /><span style={{ fontWeight:'bold' , fontSize:'larger'}}>Uploads</span></div>
            <br />
            <div className="likes"><FaRegHeart style={{ width: 'auto', height: '30px', margin:'5px'}}/><span style={{ fontWeight:'bold' , fontSize:'larger'}}>Likes</span></div>
       </div>
       
    );
}
 
export default Dashboard;