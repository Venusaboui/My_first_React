import { useState } from "react"

const Home = () => {
    // let name = 'mario';
const [name , setName] = useState('Mario');
const [age , setAge] = useState('25');


    // const handleClick=() =>{
    //     console.log('hello, ninjas');
    // }
    const handleClick=() =>{
        setName('Luigi')
        setAge('41')
        // setName('John')
    }

    // const handleClickAgain= (name) =>{
    //     console.log('hello' + name);
    // }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <br />
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Here</button>
            {/* <button onClick={() => handleClickAgain('Jenny') }>Click me again</button> */}
        </div>
     );
}
 
export default Home;