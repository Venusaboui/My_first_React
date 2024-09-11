import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DashboardLayout";

function Home() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []); // Empty dependency array to run only once when the component mounts

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
    // Use navigate for redirection
  };

  return (
    <DashboardLayout>
      <div className="mainhome">
        <button onClick={handleLogout}>Logout</button>

        {/* COURSES DIV */}
        <h2 className="fw-bold">Courses</h2>
        <br />
        <div className="courses-container">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div className="coursebox" key={course.id}>
                {course.name}
              </div>
            ))
          ) : (
            <p>No courses available</p>
          )}
        </div>

        {/* NOW READING DIV */}
        <br />
        <br />
        <div className="nowreading">
          <h2 className="fw-bold">Now Reading</h2>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Home;
