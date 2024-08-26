const Bloglist = ({blogs,title,supervisor,handleDelete}) => {
   // const blogs = props.blogs;
   // const title = props.title;


   // console.log(props,blogs);
   
    return ( 
        <div className="blog-list">
               {/*Result  div des memoires */}
               <h2 style={{margin:'20px'}}>{title}</h2>
        {blogs.map((blog) =>( 
           <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Ce memoire a été rédigé par {blog.author}</p>
            <p>Sous la supervision de {blog.supervisor}</p>
            {/* Delete button */}
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
           </div> 
        ))}
        </div>
     );
}
 
export default Bloglist;