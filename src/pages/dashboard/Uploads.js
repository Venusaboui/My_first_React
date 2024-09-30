import React, { useEffect, useState } from "react";
import { BsCloudUploadFill } from "react-icons/bs";
import { DashboardLayout3 } from "../../layouts/Dashboardlayout3";
import Navbar from "../../partials/Navbar";
import FileUploadButton from "../../components/Fileuploadbutton";


export const Uploads = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/report")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReport(data);
      });
  },[]);

  return (
    <DashboardLayout3>
      
     <div className="uploads_nav">
     <h1 className="fw-bold">Upload your Files</h1>
       <Navbar />
       </div>
      <div className="uploads">

        <br />
        <div className="uploadcontainer">
          <div className="selectfolder">
            {/* <button type="" className=" btn btn-light uploadbtn">
              <BsCloudUploadFill /> Browse folder{" "}
            </button> */}

            <FileUploadButton/>
          </div>
          <div className="uploaded">
          <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Size</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {report.map((reports) => (
                <tr key={reports.id}>
                  <th scope="row">10</th>
                  <td>{reports.title}</td>
                  <td>{reports.date}</td>
                  <td>{reports.size}</td>
                  <td>
                    <button className="btn btn-light m-2">
                      <BsCloudUploadFill /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          </div>
        </div>
      </div>
    </DashboardLayout3>
  );
};
