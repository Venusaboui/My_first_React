import React, { useState } from "react";
import Chats from "../../components/Chats";
import Reactions from "../../components/Reactions";
import { DashboardLayout } from "../../layouts/DashboardLayout";

const Notifications = () => {
  const [index, setIndex] = useState(0);
  const [notif, setNotif] = useState([]);

  return (
    <DashboardLayout>
      <div>
        <p className="fw-bold fs-1">Notifications</p>
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
    </DashboardLayout>
  );
};

export default Notifications;
