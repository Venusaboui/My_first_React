import React, { useState } from "react";
import Chats from "../../components/Chats";
import Reactions from "../../components/Reactions";
import { DashboardLayout3 } from "../../layouts/Dashboardlayout3";
import Navbar from "../../partials/Navbar";
const Notifications = () => {
  const [index, setIndex] = useState(0);
  const [notif, setNotif] = useState([]);

  return (
    <DashboardLayout3>
      <div>
      <div className="uploads_nav">
     <h1 className="fw-bold">Notifications</h1>
       <Navbar />
       </div>
        <br />
        <div className="notifcontainer">
          <div className="notifbuttons">
            <button
              type="button"
              className="chatbutton fs-4 fw-bold fst-italic"
              onClick={() => setIndex(0)}
            >
              Chats
            </button>
            <button
              type="button"
              className="chatbutton fs-4 fw-bold fst-italic"
              onClick={() => setIndex(1)}
            >
              Reactions
            </button>
          </div>
          {index === 0 ? <Chats /> : <Reactions />}
        </div>
      </div>
    </DashboardLayout3>
  );
};

export default Notifications;
