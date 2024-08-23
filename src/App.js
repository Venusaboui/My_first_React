
// import './index.css';
import Navbar from './navbar';
import Home from './Home';

function App() {
  const title ='Welcome to the new blog';
  const likes = '50';
  const link ="https://adminbom.smobilpay.integration.maviance.info/login";
  // const person = {name: 'Yoshi', age: 30};
  return (
    <div className="App">
<Navbar/>
<Home/>
      <div className="content">
      <h1>{ title}</h1>
      <p>Liked {likes} times </p>
      {/* <p>{person}</p> */}

      <p>{10}</p>
      <p>{"Hello Ninjas"}</p>
      <p>{[1,2,3,4,5,6]}</p>
      <p>{Math.random()* 10}</p>
     <p> <a href={link}>Google site</a></p>
      </div>
    </div>
  );
}

export default App;
