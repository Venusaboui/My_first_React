import { useState,useEffect } from "react"
import Bloglist from "./Bloglist";

const Home = () => {
  
// div des memoires
    const [blogs , setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', supervisor:'Maka Maka', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', supervisor:'Malong Yannick', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', supervisor:'Toto Philppe', id: 3 },
        { title: 'My new website', body: 'lorem ipsum...', author: 'mariette', supervisor:'Maka Maka', id: 4 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'mario', supervisor:'Mouangue Ruben', id: 5 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', supervisor:'Maka Maka', id: 6 }
    ]);
// ?????
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

useEffect(() =>{
    console.log('useEffect worked')
    console.log(blogs)
})
    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title='Welcome to the new blog' handleDelete={handleDelete}/>
            <br />
            {/* filter blogs */}
            <Bloglist blogs={blogs.filter((blog) => blog.author ==='mariette')} title='Mario blogs ' supervisor={'Maka Maka'}/>

<br /><br />
        {/* Result des boutons de la phrase  */}
             <h2>Homepage</h2>
            <br />
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Here</button>
            <button onClick={() => handleClickAgain('Jenny') }>Click me again</button> 
        </div> 
     );
}
 
export default Home;