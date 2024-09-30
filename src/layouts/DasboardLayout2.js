import React from "react";
import { Filterbar } from "../components/Filterbar";
import Searchbox from "../components/Searchbox";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";

export const DashboardLayout2 = ({ children }) => {
  return (
    <div className="Admin">
      {/* <Searchbox /> */}
      <div className="content">
        <Sidebar />   
        <div className="maincontainer">
          {children}</div>
        <div className="leftside">
          <Navbar />
          <Filterbar />
        </div>
      </div>
    </div>
  );
};