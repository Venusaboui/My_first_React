import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import Navbar from "../../partials/Navbar";
import { DashboardLayout3 } from "../../layouts/Dashboardlayout3";

const Profile = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
    console.log("ok");
    console.log(users);
  });

 

  return (
    <DashboardLayout3>
      <div className="Profile">
        {/* {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author ==='Josiane')} title='Now Reading ' supervisor={'Maka Maka'}/> }  */}
        {users &&
          users
            .filter((users) => users.id === "1")
            .map((users) => (
              <div className="userprofile " key={users.id}>
                <br />
                <div className="uploads_nav">
     <h1 className="fw-bold">Profile</h1>
       <Navbar />
       </div>
                <br />
                <div className="userpicture">
                  <div className="userimage">
                    <div className="mainimage">
                      <div className="circle"></div>
                    </div>
                    <div className="imgbuttons">
                      <button className="profilepicture">Delete picture </button>
                      <button className="profilepicture">Change picture</button>
                    </div>
                
                  </div>
                  <br />
                  {/* Profile stable info */}
                  <div className="userprofileinfo fs-5 text-center">
                    <p>
                      I am{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {users.Firstname} {users.Lastname}
                      </span>
                    </p>
                    <p>
                      Student at National Higher Polytechnique school of Douala.
                    </p>
                    <p>I study the in the course {users.Course}</p>
                    <p>I actually have the status of a {users.Status}</p>
                    Here you can have access to what I have been working on
                    during my School Cursus
                  </div>
                </div>
                {/* USER INFORMATION DOWN */}
                <div className="userinformation">
                  <div className="row mb-3">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-sm-4 col-form-label fs-4 col-form-label-sm"
                    >
                      First Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder={users.Firstname}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-sm-4 col-form-label fs-4 col-form-label-sm"
                    >
                      Last Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder={users.Lastname}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-sm-4 col-form-label fs-4 col-form-label-sm"
                    >
                      Course
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder={users.Course}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-sm-4 col-form-label fs-4 col-form-label-sm"
                    >
                      Status
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder={users.Status}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </DashboardLayout3>
  );
};

export default Profile;
