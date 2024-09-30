import React from "react";
import Searchbox from "../components/Searchbox";
import Sidebar from "../partials/Sidebar";
import Navbar from "../partials/Navbar";
import Rightbar from "../partials/Rightbar";

export const DashboardLayout3 = ({ children }) => {
  return (
    <div className="Admin">
      {/* <Searchbox /> */}
      <div className="content">
        <Sidebar />
        <div className="maincontainer">
          {children}</div>
        <div className="leftside">
        </div>
      </div>
    </div>
  );
};
