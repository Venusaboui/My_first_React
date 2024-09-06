import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';



const Chats = () => {
        const [notif, setNotif] = useState();
    
    return ( 
        <div className='chatcontainer'>
         <div className="chatcontent">
            <div className="picture bg-black"></div>
            <div className="message">message Lorem ipsum dolor sit amet consectet asperiores eaque perferendis, consectetur quibusdam?
                fghjkl;lkjhb Dolor, eius?</div> 
            <div className="time">10:35 </div>
         </div>

         <div className="chatcontent">
            <div className="picture bg-black"></div>
            <div className="message">message Lorem ipsum dolor sit amet consectet asperiores eaque perferendis, consectetur quibusdam?
                fghjkl;lkjhb Dolor, eius?</div> 
            <div className="time">10:35 </div>
         </div>
         <div className="chatcontent">
            <div className="picture bg-black"></div>
            <div className="message">message Lorem ipsum dolor sit amet consectet asperiores eaque perferendis, consectetur quibusdam?
                fghjkl;lkjhb Dolor, eius?</div> 
            <div className="time">10:35 </div>
         </div>
         <div className="chatcontent">
            <div className="picture bg-black"></div>
            <div className="message">message Lorem ipsum dolor sit amet consectet asperiores eaque perferendis, consectetur quibusdam?
                fghjkl;lkjhb Dolor, eius?</div> 
            <div className="time">10:35 </div>
         </div>
         <div className="chatcontent">
            <div className="picture bg-black"></div>
            <div className="message">message Lorem ipsum dolor sit amet consectet asperiores eaque perferendis, consectetur quibusdam?
                fghjkl;lkjhb Dolor, eius?</div> 
            <div className="time">10:35 </div>
         </div>
        </div>
     );
}
 
export default Chats;
