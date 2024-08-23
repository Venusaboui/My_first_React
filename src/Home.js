const Home = () => {

    const handleClick=() =>{
        console.log('hello, ninjas');
    }

    const handleClickAgain= (name) =>{
        console.log('hello' + name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <br />
            <button onClick={handleClick}>Click Here</button>
            <button onClick={() => handleClickAgain('Jenny') }>Click me again</button>
        </div>
     );
}
 
export default Home;