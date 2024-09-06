import { useState,useEffect } from "react"
import Bloglist from "./courses";
import usefetch from "./usefetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const { data: blogs ,isPending, error ,setData: setBlogs} = usefetch('http://localhost:8000/courses')
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
            


            {/* <div className="dashlinks d-flex row ">
                <Link to="/home"><img src={notif} alt="" style={{width:"30px",}}/> <span style={{fontWeight:"bold", color:"black", margin:"10px", fontSize:"25px"}}>Home</span></Link>
                
                <Link to="/newpost" ><img src={language} alt="" style={{width:"30px",}}/></Link>

                <Link to="/profile" ><img src={profile} alt="" style={{width:"30px",}}/></Link>
            </div> */}

      
        </div> 

        
     );
}
 
export default Home;