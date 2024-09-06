import { useState,useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
const[courses,setCourses]=useState()
useEffect(() => {
    fetch('http://localhost:8000/courses')
    .then(res => {
        return res.json()
})
.then(data => {
    console.log(data)
    setCourses(data)
})
console.log('ok')
console.log(courses)
});

    return ( 
        <div className="mainhome">
            {/* COURSES DIV  */}
            <h2 className="fw-bold">Courses</h2>
            <br />
            <div className="courses-container">
                {courses && courses.map((course) => (
                    <div className="coursebox" key={course.id}>
                        {course.name}
                    </div>
                ))}
            </div>

            {/* NOW READING DIV */}
            <br />
            <br />
             <div className="nowreading">
                        <h2 className="fw-bold">Now Reading</h2>
            </div>
            
        </div> 

        
     );
}
 
export default Home;