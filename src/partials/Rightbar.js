import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReportCard from "../components/Reportcard";

const Rightbar = () => {
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
    <div className="Rightbar">
      <br />
      <h3 style={{ color: "white" }}>You may also like this!</h3>
      <div className="rbcontent">
        <br />
        {error && <p className="error" style={{ color: "red" }}>{error}</p>}
        {report.map((reports) => (
          <div className="newbook" key={reports.id}>
            <div className="rbbimg">
              <ReportCard report={reports} />
            </div>
            <div className="rddcontent" style={{ color: "white" }}>
              <p className="fw-bold fs-6">
                <Link to={`/reports/${reports.id}`} className="newbooklink">
                  {reports.title}
                </Link>
              </p>
              <p>
                {reports.author} ({reports.course})
              </p>
              <p className="rblike-btn">
                <FaRegThumbsUp /> 22k
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rightbar;

