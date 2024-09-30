import React, { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { pdfjs } from "react-pdf";
import { Link, useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import book from "../images/Git book.jpg";
import profilepic from "../images/portrait.jpg";
import { DashboardLayout } from "../layouts/DashboardLayout";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;

export const Report = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [report, setReport] = useState({});
  const [progress, setProgress] = useState(0);
  const pdfUrl = 'https://excerpts.numilog.com/books/9782705940560.pdf'; // Local path to your PDF

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/report/${id}`);
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setReport(data);
        setProgress(data.progress);
      } catch (error) {
        console.error("Error fetching report:", error);
      }
    };

    fetchData();
  }, [id]);

  const getColor = (progress) => {
    if (progress <= 35) return "red";
    if (progress <= 60) return "orange";
    return "green";
  };

  const backgroundColor = getColor(progress);

  const handleReadButtonClick = () => {
    navigate(`/reportcontent?pdfUrl=${encodeURIComponent(pdfUrl)}`); // Navigate to Reportcontent page
  };

  return (
    <DashboardLayout>
      <div className="reportdetails">
        <div className="reportcontainer">
          <div className="reportimgdetails">
            <img src={book} alt="Report Book" className="imagedetails" />
            <br />
            <div className="rdlvl">
              <div className="readinglevel1">
                <div
                  className="readinglevel"
                  style={{ width: `${progress}%`, backgroundColor }}
                ></div>
              </div>
              <div className="percent fw-bold">{progress}%</div>
            </div>
          </div>
          <div className="reportcontent">
            <p className="fs-1 fw-bold text-start">{report.title}</p>
            <p className="reportintro">{report.intro}</p>
            <br />
            <div className="detailsbutton">
              <button className="readbtn" onClick={handleReadButtonClick}>
                Read
              </button>
              <button className="dbtn">
                <FaFileDownload />
              </button>
              <button className="dbtn">
                <FaShareFromSquare />
              </button>
            </div>
          </div>

          <div className="abouttheauthor">
            <p className="fst-italic fw-bold fs-8">About the author</p>
            <div className="authorimg">
              <img
                src={profilepic}
                alt="Author Portrait"
                className="portrait"
                style={{ width: "120px" }}
              />
            </div>
            <br />
            <div className="authorcontent fw-light fst-italic fs-8">
              I’m <span className="fw-bold">{report.author}</span>, a recent
              graduate in <span className="fw-bold">{report.course}</span>
              from a polytechnic institution, passionate about [specific area of
              interest]. With hands-on experience and a strong analytical
              mindset, I aim to create innovative engineering solutions that
              make a positive impact.
            </div>
            <p>
              <Link to="/profile" className="fst-italic">
                View profile
              </Link>
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
