import React, { useEffect, useState } from "react";
import { DashboardLayout2 } from "../../layouts/DasboardLayout2";
import { Link } from "react-router-dom";
import ReportCard from "../../components/Reportcard";

export const Liked = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    fetch("https://readindata-zxon.vercel.app/report")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReport(data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <DashboardLayout2>
        <h2 className="fw-bold">Liked Reports</h2>
      <div className="liked">
      
        {report .filter((reports) => reports.liked === "yes").map((reports) => (
          <div className="likedreport" key={report.id}>
            <div className="reportimg">     <ReportCard key={reports.id} report={reports} /></div>
            <div className="reportcontent">
              <p className="fw-bold"> 
              <Link  to ={`/reports/${reports.id}`}  className="nrlink fs-5 fw-bold text-start"nkey={reports.id}>
              {reports.title}</Link>
              </p>
            
                By {reports.author} since {reports.date}
              
              <br /> <br />
              <p className="reportbody">{reports.body}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout2>
  );
};
