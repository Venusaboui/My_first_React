import { useState } from "react";

const Bloglist = ({blogs,title,supervisor,handleDelete}) => {
   // const blogs = props.blogs;
   // const title = props.title;

   // const [name , setName] = useState('Mario');
   const [likes , setLikes] = useState('50');
   const LikeClick=() =>{
      setLikes('10000')   
  }


   // console.log(props,blogs);
   
    return ( 
        <div className="blog-list">
               {/*Result  div des memoires */}
               <h2 style={{margin:'20px'}}>{title}</h2>
        {blogs.map((blog) =>( 
           <div className="blog-preview" key={blog.id}>
               <h2>{blog.title}</h2>
               <p>Ce memoire a été rédigé par <span style={{ fontWeight:'bold'}}>{blog.author}</span></p>
               <p>Sous la supervision de <span style={{ fontStyle:'italic',fontWeight:'bold',fontSize:'small'}}>{blog.supervisor}</span></p>
               {/* Delete button */}
               <button onClick={() => handleDelete(blog.id)}>Delete</button>
               <button onClick={() => LikeClick(blog.id)}>Like</button>{likes}
           </div> 
        ))}
        </div>
     );
}
 
export default Bloglist;