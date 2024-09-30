import { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReportCard from "../components/Reportcard";

const Nowreading = () => {
  const [report, setReport] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://readindata-zxon.vercel.app/report")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setReport(data);
      })
      .catch((error) => {
        console.error("Error fetching reports:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="nowreading">
      {error && <p className="error">{error}</p>}
      {report.filter((reports) => reports.reading === "yes").map((reports) => (
        <div className="readingbook" key={reports.id}>
          <div className="readingimg">
            <ReportCard report={reports} />
          </div>
          <div className="readinginfo">
            <p>
              <span>
                <Link to={`/reports/${reports.id}`} className="nrlink fs-5 fw-bold text-start">
                  {reports.title}
                </Link>
              </span>
            </p>
            <span className="fst-italic fw-bold"> by {reports.author} ({reports.course})</span>
            <p className="nr-reportbody">{reports.intro}</p>
            {/* LIKE BUTTON */}
            <p className="like-btn">
              <FaRegThumbsUp /> 22k
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nowreading;
