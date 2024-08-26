const  Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>Mon-<span  style={{color:'#C2B45F'}} >MEMO</span></h1>
            <div className="links">
                <a href="/" style={{
                    color:"White",
                    backgroundColor:'black',
                    borderRadius:'8px'
                }}>Home</a>
                
                <a href="/create" style={{
                    color:"White",
                    backgroundColor:'black',
                    borderRadius:'8px'
                }}>New Post</a>

                <a href="/create" style={{
                    color:"White",
                    backgroundColor:'black',
                    borderRadius:'8px'
                }}>Pinned</a>
            </div>
        </nav>
     );
}
 
export default  Navbar;