
import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import Chats from './chats';
import Reactions from './Reactions';
import 'bootstrap/dist/css/bootstrap.min.css';



const Notif = () => {
        const [index, setIndex]=useState(0)
        const [notif, setNotif] = useState([
         
        ]);
    
    return ( 
        <div>
          <p className="fw-bold fs-1">Notifications</p>
          <br/>
          <div className="notifcontainer">
            <div className="notifbuttons">
            <button type='button' className='chatbutton fs-4 fw-bold fst-italic' onClick={()=>setIndex(0)}>Chats</button>
              <button type='button' className='chatbutton fs-4 fw-bold fst-italic' onClick={()=>setIndex(1)}>Reactions</button>
            </div>
             {index===0 ? <Chats/> : <Reactions/>} 
          </div>

          
        </div>
     );
}
 
export default Notif;
