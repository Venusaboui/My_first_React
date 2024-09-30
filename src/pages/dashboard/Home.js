import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import Nowreading from "../../components/Nowreading";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Home component mounted");

    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:8000/courses");
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();

    return () => {
      console.log("Home component unmounted");
    };
  }, []);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <DashboardLayout>
      <div className="mainhome">
        <h2 className="fw-bold">Courses</h2>
        <br />
        <div className="courses-container">
          {courses.map((course) => (
            <Link to={`/course/${course.id}`} className="coursebox" key={course.id}>
              <FaFileAlt /> {course.name}
            </Link>
          ))}
        </div>

        <br />
        <br />
        <div className="nowreading">
          <h2 className="fw-bold">Now Reading</h2>
          <Nowreading />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Home;
