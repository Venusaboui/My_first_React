const  Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>The REACT blog </h1>
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
                }}>New blog</a>
            </div>
        </nav>
     );
}
 
export default  Navbar;