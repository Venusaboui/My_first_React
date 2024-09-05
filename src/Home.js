import { useState,useEffect } from "react"
import Bloglist from "./courses";
import usefetch from "./usefetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const { data: blogs ,isPending, error ,setData: setBlogs} = usefetch('http://localhost:8000/blogs')
    // const [blogs , setBlogs] = useState(null);
    const [data , setData] = useState(null);
    const [name , setName] = useState('Mario');
    const [age , setAge] = useState('25');
  

// valeurs initiales 
    const handleClick=() =>{
        setName('Luigi')
        setAge('41') 
    }
// bouton changeant
    const handleClickAgain= (name) =>{
        console.log('hello' + name);
    }
    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id )
        setBlogs(newBlogs)

    }
// Fetching data from the DB

    console.log('useEffect worked')
    console.log(blogs)

    return ( 
        <div className="home">
            {error && <div>{error}</div>} 
            {isPending && <div>Loading......</div>}
            {blogs && <Bloglist  blogs={blogs} title='Courses' handleDelete={handleDelete}/> }
            <br />
            {/* filter blogs */}
            {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author ==='Josiane')} title='Now Reading ' supervisor={'Maka Maka'}/> } 


        {/* Result des boutons de la phrase  */}
             {/* <h2>Homepage</h2>
            <br />
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Here</button>
            <button onClick={() => handleClickAgain('Jenny') }>Click me again</button>  */}
        </div> 
     );
}
 
export default Home;