import React, { useEffect, useState } from "react";
import { DashboardLayout2 } from "../layouts/DasboardLayout2";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReportCard from "./Reportcard";

const Coursepage = () => {
  const [report, setReport] = useState([]);
  const [course, setCourse] = useState({});
  const [courses, setCourses] = useState([]);
  const { id } = useParams();

    useEffect(() => {
      fetch("http://localhost:8000/report")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setReport(data);
        });
    },[]);

  useEffect(() => {
    fetchCourses();
    function fetchCourses() {
      const data = fetch("http://localhost:8000/courses")
        .then((res) => res.json())
        .then((data) => {
          setCourses(data);
        })
        .catch((error) => {
          console.error("Error fetching courses:", error);
        });
    }
  }, []);

  useEffect(() => {
    const details = courses?.find((item) => {
      return item.id == id;
    });
    setCourse(details);
  }, [courses,id]);

  return (
    <DashboardLayout2>
      <h2 className="fw-bold">{course?.name}</h2>

      <div className="liked">
        {report
          .filter((reports) => reports.course === course?.abbrev)
          .map((reports) => (
            <div className="likedreport" key={reports.id}>
              <div className="reportimg">     <ReportCard key={reports.id} report={reports} /></div>
              <div className="reportcontent">
                <p className="fw-bold"> <Link  to ={`/reports/${reports.id}`}  className="nrlink fs-5 fw-bold text-start"nkey={reports.id}>
                {reports.title}</Link></p>
                By {reports.author} since {reports.date}
                <br />
                {reports.course}
                <br /> <br />
                <p className="reportbody">{reports.body}</p>
              </div>
            </div>
          ))}
      </div>
    </DashboardLayout2>
  );
};

export default Coursepage;
