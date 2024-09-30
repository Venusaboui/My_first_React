// ReportCard.js
import React from "react";

const ReportCard = ({ report }) => {
  let courseImage;
  let courseColor;

  switch (report.course) {
    case "GIT":
      courseColor = "blue"; // Color for GIT
      break;
    case "GPR":
      courseColor = "white"; // Color for GPR
      break;
    case "GMP":
      courseColor = "lightblue"; // Color for GMP
      break;
    case "GM":
      courseColor = "grey"; // Color for GM
      break;
    case "GAM":
      courseColor = "black"; // Color for GAM
      break;
    case "GCI":
      courseColor = "brown"; // Color for GCI
      break;
    case "QHSE":
      courseColor = "lightgreen"; // Color for QHSE
      break;
    case "GESI":
      courseColor = "lightgrey"; // Color for QHSE
      break;
    case "GE":
      courseColor = "lightyellow"; // Color for QHSE
      break;
  }

  return (
    <div
      className="Reportcard"
      style={{
        backgroundColor: `${courseColor}`,
        width: "100%",
        height: "100%",
        borderRadius:"10px 10px 10px 10px"
      }}
    >
      
    </div>
  );
};

export default ReportCard;
